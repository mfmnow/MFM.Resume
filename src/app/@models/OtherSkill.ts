export class OtherSkill {
  public Category: string;
  public Skills: string;

  static GetOtherSkills(): OtherSkill[] {
    let returnValue = [
      {
        Category: "Architecture",
        Skills: "Software Architecture (Multi-layered Apps, SOA)"
      },
      {
        Category: "Management",
        Skills: "Project Planning, Management (AGILE, SCRUM)"
      },
      {
        Category: "Architecture",
        Skills: "Code Architecture (SOLID, OO , Dependency Injection)"
      },
      {
        Category: "Continuous Delivery",
        Skills: "CI/CD and DevOps"
      },
      {
        Category: "Database",
        Skills: "Database Analysis & Design (ER Data Modeling)"
      },
      {
        Category: "Other Skills",
        Skills: "Committed to tight deadlines/high quality standards"
      },
      {
        Category: "Other Skills",
        Skills: "High trouble shooting skills"
      },
      {
        Category: "Other Skills",
        Skills: "Technical writing, Wiki creation (Markdown language)"
      },
      {
        Category: "Other Skills",
        Skills: "UI/UX design skills"
      },
      {
        Category: "Operating Systems",
        Skills: "Windows 2000-10 administration"
      },
      {
        Category: "Operating Systems",
        Skills: "Windows 2000-2012 Server administration"
      },
      {
        Category: "Operating Systems",
        Skills: "openSUSE 11 and Ubuntu administration"
      },
      {
        Category: "Operating Systems",
        Skills: "Installation of (Linux/Apache/MySQL/PHP)"
      },
      {
        Category: "Web Servers Administration",
        Skills: "Microsoft IIS(Latest) and Apache"
      }
    ];
    return returnValue;
  }
}
