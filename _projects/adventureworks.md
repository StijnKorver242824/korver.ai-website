---
title: "AdventureWorks Power BI Dashboard"
excerpt: "An enterprise-grade interactive Power BI dashboard built on the AdventureWorksDW2019 data warehouse, covering sales performance, customer geography, product hierarchy, pricing analysis, and executive reporting."
date: 2025-11-07
tags: [Data Analytics, Business Intelligence]
tech: [Power BI, DAX, SQL Server, AdventureWorksDW2019]
type: "Dashboard"
github_repo: "adventureworks-dashboard"
thumbnail: "/assets/images/adventureworks.png"
---

## Overview

This project is a fully interactive Power BI dashboard built on the **AdventureWorksDW2019** dataset, a Microsoft sample data warehouse simulating a fictitious bicycle manufacturer. The dashboard spans five pages and covers sales performance, customer geography, product hierarchy, pricing analysis, and executive reporting.

The project was built as part of an analytics challenge from my university, which required completing at least 5 of 15 defined dashboard tasks. The five implemented pages address the core business reporting needs of a multi-channel sales organisation, combining Internet (B2C) and Reseller (B2B) sales streams.

---

## Dashboard

<div class="dashboard-embed">
  <iframe
    title="AdventureWorks Dashboard"
    src="https://app.powerbi.com/view?r=gibberish"
    frameborder="0"
    allowFullScreen="true"
    style="width: 100%; height: 600px; border-radius: 8px;">
  </iframe>
  <p class="dashboard-note">
    <em>To embed: in Power BI Desktop, go to File → Publish → Publish to web, then replace the <code>src</code> URL above with your embed link.</em>
  </p>
</div>

---

## My Contribution

This was an individual project. I was responsible for the full pipeline: connecting to the SQL Server data source, designing the star-schema data model, writing all DAX measures, building each report page, and applying formatting and interactivity.

The channel slicer pattern, routing every core measure through a `SWITCH(SELECTEDVALUE(...))` to support Internet, Reseller, and combined views, was a design decision I made early to avoid maintaining parallel versions of every measure.

---

## Technical Approach

### Data Stack

- **SQL Server 2019** — local instance hosting the `AdventureWorksDW2019` database, restored from Microsoft's official `.bak` file
- **Power BI Desktop** — Import mode, so the model runs fully offline after the initial load
- **DAX** — all calculated measures live in a dedicated `_Measures` table

### Data Model

The model follows a standard **star schema** with fact tables at the centre connected to dimension tables via integer surrogate keys:

```mermaiderDiagram
    FactInternetSales }o--|| DimDate : "OrderDateKey"
    FactInternetSales }o--|| DimProduct : "ProductKey"
    FactInternetSales }o--|| DimCustomer : "CustomerKey"
    FactInternetSales }o--|| DimSalesTerritory : "SalesTerritoryKey"
 
    FactResellerSales }o--|| DimDate : "OrderDateKey"
    FactResellerSales }o--|| DimProduct : "ProductKey"
    FactResellerSales }o--|| DimReseller : "ResellerKey"
    FactResellerSales }o--|| DimEmployee : "EmployeeKey"
    FactResellerSales }o--|| DimSalesTerritory : "SalesTerritoryKey"
 
    DimProduct }o--|| DimProductSubcategory : "ProductSubcategoryKey"
    DimProductSubcategory }o--|| DimProductCategory : "ProductCategoryKey"
    DimCustomer }o--|| DimGeography : "GeographyKey"
```

> **Note**: `CalendarYear 2014` is excluded as the dataset contains only partial data for that year, which skews YoY calculations.

---

## Dashboard Pages

### Page 1 — Daily Sales View

A lightweight operational view for quick daily monitoring.

**Visuals:** 3 KPI cards (Total Revenue, Total Orders, AOV), column chart of revenue by day, and slicers for Product Category and Channel (Internet / Reseller).

**Tables:** `FactInternetSales`, `FactResellerSales`, `DimDate`, `DimProductCategory`

---

### Page 2 — Executive Sales View

A high-level summary of overall business performance for senior stakeholders.

**Visuals:** 5 KPI cards (Total Revenue, Total Orders, Total Units, Gross Margin %, YoY Revenue Growth), stacked column chart of Internet vs Reseller revenue by year, and slicers for Calendar Year, Sales Territory, and Product Category.

**Tables:** `FactInternetSales`, `FactResellerSales`, `DimDate`, `DimSalesTerritory`, `DimProductCategory`

---

### Page 3 — Customer Geography Heatmap

A geographic breakdown of Internet sales performance by country. Reseller sales are excluded here as resellers do not carry customer geography data.

**Visuals:** Filled map (Internet Revenue by Country), 4 KPI cards (Internet Revenue, Gross Margin %, AOV, YoY Growth), bar chart of YoY Internet Revenue Growth by Country, and slicers for Calendar Year and Product Category.

**Tables:** `FactInternetSales`, `DimCustomer`, `DimGeography`, `DimDate`

---

### Page 4 — Price & Discount Waterfall

A breakdown of how list price converts to gross margin after discounts and costs are applied.

**Visuals:** Waterfall chart (List Price → Discount → Net Sales → Product Cost → Gross Margin), bar chart of Gross Margin % by Product Category, and slicers for Calendar Year, Channel, and Product Category.

**Tables:** `FactInternetSales`, `FactResellerSales`, `DimProduct`, `DimDate`

---

### Page 5 — Product Hierarchy Performance

An analysis of which products, subcategories, and categories drive the most revenue and margin.

**Visuals:** Treemap (SKU Revenue by Category and Subcategory), table with conditional formatting (Product Name, Category, SKU Revenue, SKU Margin %, YoY SKU Revenue Growth), bar chart of SKU Margin % by Category, and slicers for Calendar Year and Product Category.

**Tables:** `FactInternetSales`, `FactResellerSales`, `DimProduct`, `DimProductSubcategory`, `DimProductCategory`, `DimDate`

---

## DAX Measures Reference

All measures are stored in a dedicated `_Measures` table.

### Core Measures

```dax
Total Revenue = 
VAR SelectedChannel = SELECTEDVALUE(DimChannel[Channel], "Both")
RETURN
SWITCH(SelectedChannel,
    "Internet", SUMX(FactInternetSales, FactInternetSales[SalesAmount]),
    "Reseller", SUMX(FactResellerSales, FactResellerSales[SalesAmount]),
    SUMX(FactInternetSales, FactInternetSales[SalesAmount]) + 
    SUMX(FactResellerSales, FactResellerSales[SalesAmount])
)

Total Orders = 
VAR SelectedChannel = SELECTEDVALUE(DimChannel[Channel], "Both")
RETURN
SWITCH(SelectedChannel,
    "Internet", DISTINCTCOUNT(FactInternetSales[SalesOrderNumber]),
    "Reseller", DISTINCTCOUNT(FactResellerSales[SalesOrderNumber]),
    DISTINCTCOUNT(FactInternetSales[SalesOrderNumber]) + 
    DISTINCTCOUNT(FactResellerSales[SalesOrderNumber])
)

AOV = DIVIDE([Total Revenue], [Total Orders])

Total Units = 
VAR SelectedChannel = SELECTEDVALUE(DimChannel[Channel], "Both")
RETURN
SWITCH(SelectedChannel,
    "Internet", SUM(FactInternetSales[OrderQuantity]),
    "Reseller", SUM(FactResellerSales[OrderQuantity]),
    SUM(FactInternetSales[OrderQuantity]) + 
    SUM(FactResellerSales[OrderQuantity])
)
```

### Margin Measures

```dax
Gross Margin = 
VAR SelectedChannel = SELECTEDVALUE(DimChannel[Channel], "Both")
RETURN
SWITCH(SelectedChannel,
    "Internet", SUM(FactInternetSales[SalesAmount]) - SUM(FactInternetSales[TotalProductCost]),
    "Reseller", SUM(FactResellerSales[SalesAmount]) - SUM(FactResellerSales[TotalProductCost]),
    (SUM(FactInternetSales[SalesAmount]) + SUM(FactResellerSales[SalesAmount])) - 
    (SUM(FactInternetSales[TotalProductCost]) + SUM(FactResellerSales[TotalProductCost]))
)

Gross Margin % = DIVIDE([Gross Margin], [Total Revenue])
```

### Time Intelligence

```dax
YoY Revenue Growth = 
VAR CurrentRevenue = [Total Revenue]
VAR PreviousRevenue = CALCULATE([Total Revenue], SAMEPERIODLASTYEAR(DimDate[FullDateAlternateKey]))
RETURN
DIVIDE(CurrentRevenue - PreviousRevenue, PreviousRevenue)
```

### Internet-Specific Measures

```dax
Internet Revenue = SUM(FactInternetSales[SalesAmount])

Internet Gross Margin = 
SUM(FactInternetSales[SalesAmount]) - SUM(FactInternetSales[TotalProductCost])

Internet Gross Margin % = DIVIDE([Internet Gross Margin], [Internet Revenue])

Internet AOV = DIVIDE([Internet Revenue], DISTINCTCOUNT(FactInternetSales[SalesOrderNumber]))

YoY Internet Revenue Growth = 
VAR CurrentRevenue = [Internet Revenue]
VAR PreviousRevenue = CALCULATE([Internet Revenue], SAMEPERIODLASTYEAR(DimDate[FullDateAlternateKey]))
RETURN
DIVIDE(CurrentRevenue - PreviousRevenue, PreviousRevenue)
```

### Waterfall Measures

```dax
List Price Total = 
SUMX(FactInternetSales, RELATED(DimProduct[ListPrice]) * FactInternetSales[OrderQuantity]) +
SUMX(FactResellerSales, RELATED(DimProduct[ListPrice]) * FactResellerSales[OrderQuantity])

Total Discount = 
SUMX(FactInternetSales, 
    RELATED(DimProduct[ListPrice]) * FactInternetSales[OrderQuantity] * FactInternetSales[UnitPriceDiscountPct]) +
SUMX(FactResellerSales, 
    RELATED(DimProduct[ListPrice]) * FactResellerSales[OrderQuantity] * FactResellerSales[UnitPriceDiscountPct])

Net Sales = [List Price Total] - [Total Discount]

Total Product Cost = 
SUM(FactInternetSales[TotalProductCost]) + 
SUM(FactResellerSales[TotalProductCost])

Waterfall Gross Margin = [Net Sales] - [Total Product Cost]

Waterfall Value = 
SWITCH(SELECTEDVALUE(WaterfallSteps[Category]),
    "List Price", [List Price Total],
    "Discount", -[Total Discount],
    "Net Sales", [Net Sales],
    "Product Cost", -[Total Product Cost],
    "Gross Margin", [Waterfall Gross Margin]
)
```

### SKU Measures

```dax
SKU Revenue = 
SUM(FactInternetSales[SalesAmount]) + 
SUM(FactResellerSales[SalesAmount])

SKU Margin = 
(SUM(FactInternetSales[SalesAmount]) + SUM(FactResellerSales[SalesAmount])) -
(SUM(FactInternetSales[TotalProductCost]) + SUM(FactResellerSales[TotalProductCost]))

SKU Margin % = DIVIDE([SKU Margin], [SKU Revenue])

YoY SKU Revenue Growth = 
VAR CurrentRevenue = [SKU Revenue]
VAR PreviousRevenue = CALCULATE([SKU Revenue], SAMEPERIODLASTYEAR(DimDate[FullDateAlternateKey]))
RETURN
DIVIDE(CurrentRevenue - PreviousRevenue, PreviousRevenue)
```

---

## What I Found Difficult

The trickiest part was getting the channel slicer to work cleanly across measures from two separate fact tables. Because `FactInternetSales` and `FactResellerSales` are independent tables, a simple `SUM` wouldn't span both, each measure needed a `SWITCH(SELECTEDVALUE(...))` pattern to route context correctly. Getting this right once, then applying it consistently across all core measures, avoided a lot of later confusion.

Designing the waterfall chart also required a calculated helper table (`WaterfallSteps`) to define the step order, since Power BI's native waterfall visual expects a single value column rather than separate measures for each bar.

---

## Dataset

AdventureWorksDW2019 is a Microsoft sample data warehouse, free for learning and demonstration purposes.

Official documentation: [https://learn.microsoft.com/en-us/sql/samples/adventureworks-install-configure](https://learn.microsoft.com/en-us/sql/samples/adventureworks-install-configure)
