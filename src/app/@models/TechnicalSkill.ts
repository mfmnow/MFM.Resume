export class TechnicalSkill {
  public Icon: string;
  public Category: string;
  public Skills: string;
  public SkillLevel: number;
  public SkillLevelStyle: string;
  public Class: string;

  static GetTechnicalSkills() : TechnicalSkill[]{ 
    let returnValue = [
      {
        Icon: "far fa-file-code",
        Category: "Basic .NET Technologies",
        Skills: ".NET Framework (-> 4.7), C# & VB.NET",
        SkillLevel: 72,
        Class: "success"
      },
      {
        Icon: "far fa-file-code",
        Category: "Modern Technologies",
        Skills: "ASP.NET Core 2, Angular (4-8), EF, OWIN, WebAPI & Moq ",
        SkillLevel: 72,
        Class: "success"
      },
      {
        Icon: "fa-wrench",
        Category: "CI/CD DevOps / SCRUM Tools",
        Skills: "AzureDevOps, TFS & Octopus",
        SkillLevel: 70,
        Class: "success"
      },
      {
        Icon: "fa-database",
        Category: "Database Technologies",
        Skills: "SQL Server 2000-2016, Oracle 11g, TOAD (Oracle) & MySQL",
        SkillLevel: 72,
        Class: "success"
      },
      {
        Icon: "fa-wrench",
        Category: "Testing",
        Skills: "Backend (NUnit, Moq), Frontend (Karma, Jasmine), Automation (Selenium)",
        SkillLevel: 70,
        Class: "success"
      },
      {
        Icon: "fa-wrench",
        Category: "Source Control",
        Skills: "GIT (BitBucket and AzureDevOps), TFS & SVN Subversion",
        SkillLevel: 72,
        Class: "success"
      },
      {
        Icon: "far fa-file-code",
        Category: ".NET Technologies",
        Skills: "ASP.NET, MVC, ADO.NET, Web Services  & .NET Remoting",
        SkillLevel: 72,
        Class: "success"
      },
      {
        Icon: "fa-wrench",
        Category: "Software Management Tools",
        Skills: "AzureDevOps, TFS, JIRA, MS Project & MS Visio",
        SkillLevel: 72,
        Class: "success"
      },
      {
        Icon: "far fa-file-code",
        Category: "Scripting Languages",
        Skills: "OO JavaScript/1.8, JSON, JQuery & AJAX",
        SkillLevel: 72,
        Class: "success"
      },
      {
        Icon: "far fa-file-code",
        Category: "Markup Languages",
        Skills: "HTML4/5, XML, DHTML, CSS2/3, Materialize & Bootstrap 3/4",
        SkillLevel: 72,
        Class: "success"
      },
      {
        Icon: "far fa-file-code",
        Category: "Classic Internet Technologies",
        Skills: "PHP & ASP",
        SkillLevel: 67,
        Class: "success"
      },
      {
        Icon: "fa-wrench",
        Category: "Development IDEs",
        Skills: "Visual Studio .NET 2003-2019 & Eclipse",
        SkillLevel: 72,
        Class: "success"
      },
      {
        Icon: "fa-wrench",
        Category: "Application Servers",
        Skills: "SharePoint, Sitefinity, Ultimus Workflow BPM & MOODLE",
        SkillLevel: 60,
        Class: "info"
      },      
      {
        Icon: "far fa-file-code",
        Category: "Other Languages/Technologies",
        Skills: "C/C++, Visual C++ 6.0, JSP and WCF, Java & VB",
        SkillLevel: 40,
        Class: "warning"
      },
      {
        Icon: "far fa-file-code",
        Category: "Other Technologies",
        Skills: "XAML, WPF,  WWF & AWS",
        SkillLevel: 20,
        Class: "danger"
      }
    ]; 
    return returnValue;  
  }
}
