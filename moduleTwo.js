FusionCharts.ready(function () {
  var topStores = new FusionCharts({
    type: "sunburst",
    renderAt: "container-2",
    width: "900",
    height: "650",
    dataFormat: "json",
    dataSource: {
      chart: {
        theme: "fusion",
        caption: "Module 2 Learning Goals from Curriculum Analysis",
        subcaption: "Click on the segments to Drill-down",
        showPlotBorder: "1",
        animation: "1",
        paletteColors: "D7D8E7, 11F1FB, FAAE03, EF3752,",
        animationDuration: "2",
        centerAngle: "360",
        textOutline: "0",
      },
      data: [
        {
          id: "Learning Goals",
          parent: "",
          label: "M2 Goals",
          value: "",
        },
        {
          id: "Mastery",
          parent: "Learning Goals",
          label: "Mastery",
          value: "1",
        },
        {
          id: "OOP/Ruby-M",
          parent: "Mastery",
          label: "OOP/Ruby",
          value: "1",
        },
        {
          id: "Ruby Code Style/Conventions",
          parent: "OOP/Ruby-M",
          label: "Ruby Code Style/Conventions",
          value: "1",
        },
        {
          id: "SRP",
          parent: "OOP/Ruby-M",
          label: "SRP",
          value: "1",
        },
        {
          id: "Web",
          parent: "Mastery",
          label: "Web",
          value: "1",
        },
        {
          id: "HTTP Verbs",
          parent: "Web",
          label: "HTTP Verbs",
          value: "1",
        },
        {
          id: "Req/Res Cycle",
          parent: "Web",
          label: "Request Response Cylce",
          value: "1",
        },
        {
          id: "REST",
          parent: "Web",
          label: "REST",
          value: "1",
        },
        {
          id: "Nested Routes",
          parent: "Web",
          label: "Nested Routes",
          value: "1",
        },
        {
          id: "Namespaced Routing",
          parent: "Web",
          label: "Namespaced Routing",
          value: "1",
        },
        {
          id: "Testing-M",
          parent: "Mastery",
          label: "Testing",
          value: "1",
        },
        {
          id: "Capybara",
          parent: "Testing-M",
          label: "Capybara",
          value: "1",
        },
        {
          id: "RSpec",
          parent: "Testing-M",
          label: "RSpec",
          value: "1",
        },
        {
          id: "TDD",
          parent: "Testing-M",
          label: "TDD/Red Green Refactor",
          value: "1",
        },
        {
          id: "Database-M",
          parent: "Mastery",
          label: "Database",
          value: "1",
        },
        {
          id: "Migration",
          parent: "Database-M",
          label: "Migrating",
          value: "1",
        },
        {
          id: "One-to-Many",
          parent: "Database-M",
          label: "One-to-Many",
          value: "1",
        },
        {
          id: "Many-to-Many",
          parent: "Database-M",
          label: "Many-to-Many",
          value: "1",
        },
        {
          id: "Foreign Keys",
          parent: "Database-M",
          label: "Foreign Keys",
          value: "1",
        },
        {
          id: "Primary Keys",
          parent: "Database-M",
          label: "Primary Keys",
          value: "1",
        },
        {
          id: "Normalization",
          parent: "Database-M",
          label: "Normalization",
          value: "1",
        },
        {
          id: "Joins",
          parent: "Database-M",
          label: "Joins Query",
          value: "1",
        },
        {
          id: "Where",
          parent: "Database-M",
          label: "Where Query",
          value: "1",
        },
        {
          id: "Aggregating",
          parent: "Database-M",
          label: "Aggregating Queries",
          value: "1",
        },
        {
          id: "Grouping",
          parent: "Database-M",
          label: "Grouping Queries",
          value: "1",
        },
        {
          id: "Select",
          parent: "Database-M",
          label: "Select Query",
          value: "1",
        },
        {
          id: "Find",
          parent: "Database-M",
          label: "Find Query",
          value: "1",
        },
        {
          id: "SQL",
          parent: "Database-M",
          label: "SQL Queries",
          value: "1",
        },
        {
          id: "AR Associtations",
          parent: "Database-M",
          label: "Active Record Associations",
          value: "1",
        },
        {
          id: "Functional",
          parent: "Learning Goals",
          label: "Functional",
          value: "1",
        },
        {
          id: "OOP/Ruby-Fun",
          parent: "Functional",
          label: "OOP/Ruby",
          value: "1",
        },
        {
          id: "Namespacing",
          parent: "OOP/Ruby-Fun",
          label: "Namespacing",
          value: "1",
        },
        {
          id: "Design Patterns",
          parent: "OOP/Ruby-Fun",
          label: "Desgin Patterns/SOLID/4 Pillars",
          value: "1",
        },
        {
          id: "Refactoring",
          parent: "OOP/Ruby-Fun",
          label: "Code Smells/Refactoring",
          value: "1",
        },
        {
          id: "Inheritance",
          parent: "OOP/Ruby-Fun",
          label: "Implement Inheritance",
          value: "1",
        },
        {
          id: "Web-Fun",
          parent: "Functional",
          label: "Web",
          value: "1",
        },
        {
          id: "HTML",
          parent: "Web-Fun",
          label: "HTML",
          value: "1",
        },
        {
          id: "CSS",
          parent: "Web-Fun",
          label: "CSS",
          value: "1",
        },
        {
          id: "Cookies/Sessions",
          parent: "Web-Fun",
          label: "Cookies/Sessions",
          value: "1",
        },
        {
          id: "Frameworks",
          parent: "Web-Fun",
          label: "Rails Framework",
          value: "1",
        },
        {
          id: "Git-Fun",
          parent: "Functional",
          label: "Git",
          value: "1",
        },
        {
          id: "Stash",
          parent: "Git-Fun",
          label: "Stash",
          value: "1",
        },
        {
          id: "Log/Reflog",
          parent: "Git-Fun",
          label: "Log & Reflog",
          value: "1",
        },
        {
          id: "Blame",
          parent: "Git-Fun",
          label: "Blame",
          value: "1",
        },
        {
          id: "Testing-Fun",
          parent: "Functional",
          label: "Testing",
          value: "1",
        },
        {
          id: "Mocks & Stubs",
          parent: "Testing-Fun",
          label: "Mocks & Stubs",
          value: "1",
        },
        {
          id: "Top Down Testing",
          parent: "Testing-Fun",
          label: "Top Down Testing",
          value: "1",
        },
        {
          id: "Bottom Up Testing",
          parent: "Testing-Fun",
          label: "Bottom Up Testing",
          value: "1",
        },
        {
          id: "Database-Fun",
          parent: "Functional",
          label: "Database",
          value: "1",
        },
        {
          id: "ORM",
          parent: "Database-Fun",
          label: "Object Relational Mappers",
          value: "1",
        },
        {
          id: "AR Scopes",
          parent: "Database-Fun",
          label: "Active Record Scopes",
          value: "1",
        },
        {
          id: "Ops",
          parent: "Functional",
          label: "Ops",
          value: "1",
        },
        {
          id: "Heroku",
          parent: "Ops",
          label: "Heroku",
          value: "1",
        },
        {
          id: "CS",
          parent: "Functional",
          label: "CS Topics",
          value: "1",
        },
        {
          id: "Whiteboarding",
          parent: "CS",
          label: "Whiteboarding",
          value: "1",
        },
        {
          id: "Security",
          parent: "Functional",
          label: "Security",
          value: "1",
        },
        {
          id: "Exposure",
          parent: "Security",
          label: "Expose only necessary data",
          value: "1",
        },
        {
          id: "Authorization",
          parent: "Security",
          label: "Authorization",
          value: "1",
        },
        {
          id: "Authentication",
          parent: "Security",
          label: "Authentication",
          value: "1",
        },
        {
          id: "Familiar",
          parent: "Learning Goals",
          label: "Familiar",
          value: "1",
        },
        {
          id: "Ruby-Fam",
          parent: "Familiar",
          label: "OOP/Ruby",
          value: "1",
        },
        {
          id: "Error Handling",
          parent: "Ruby-Fam",
          label: "Error Handling",
          value: "1",
        },
        {
          id: "HTTP",
          parent: "Ruby-Fam",
          label: "Faraday, Net::HTTP/URI, HTTParty",
          value: "1",
        },
        {
          id: "APIs",
          parent: "Familiar",
          label: "APIs",
          value: "1",
        },
        {
          id: "API-C",
          parent: "APIs",
          label: "Consume Open APIs",
          value: "1",
        },
        {
          id: "Web-Fam",
          parent: "Familiar",
          label: "Web",
          value: "1",
        },
        {
          id: "DNS",
          parent: "Web-Fam",
          label: "DNS",
          value: "1",
        },
        {
          id: "Git-Fam",
          parent: "Familiar",
          label: "Git",
          value: "1",
        },
        {
          id: "Cherry Picking",
          parent: "Git-Fam",
          label: "Cherry Picking",
          value: "1",
        },
        {
          id: "Amend",
          parent: "Git-Fam",
          label: "Amend",
          value: "1",
        },
        {
          id: "Optimization",
          parent: "Familiar",
          label: "Optimization",
          value: "1",
        },
        {
          id: "Big O",
          parent: "Optimization",
          label: "Big O",
          value: "1",
        },
        {
          id: "Database-Fam",
          parent: "Familiar",
          label: "Database",
          value: "1",
        },
        {
          id: "Callbacks",
          parent: "Database-Fam",
          label: "Callbacks",
          value: "1",
        },
        {
          id: "Ops-Fam",
          parent: "Familiar",
          label: "Ops",
          value: "1",
        },
        {
          id: "Assets",
          parent: "Ops-Fam",
          label: "Asset Pipeline",
          value: "1",
        },
        {
          id: "CS-Fam",
          parent: "Familiar",
          label: "CS Topics",
          value: "1",
        },
        {
          id: "RAM vs. Hard Drive",
          parent: "CS-Fam",
          label: "RAM vs. Hard Drive",
          value: "1",
        },
        {
          id: "Processors & Threads",
          parent: "CS-Fam",
          label: "Processors & Threads",
          value: "1",
        },
        {
          id: "Bi/Hex",
          parent: "CS-Fam",
          label: "Binary & Hexidecimal",
          value: "1",
        },
        {
          id: "Encoding",
          parent: "CS-Fam",
          label: "Text Encoding",
          value: "1",
        },
        {
          id: "Cache",
          parent: "CS-Fam",
          label: "Cache",
          value: "1",
        },
      ],
    },
  }).render();
});
