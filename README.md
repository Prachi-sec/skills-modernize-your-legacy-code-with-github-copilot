# Modernize your legacy code with GitHub Copilot

<img src="https://octodex.github.com/images/Professortocat_v2.png" align="right" height="200px" />

Hey Prachi-sec!

Mona here. I'm done preparing your exercise. Hope you enjoy! 💚

Remember, it's self-paced so feel free to take a break! ☕️

[![](https://img.shields.io/badge/Go%20to%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/Prachi-sec/skills-modernize-your-legacy-code-with-github-copilot/issues/1)

---

&copy; 2025 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)

## Sequence Diagram: Data Flow of the Accounting System

```mermaid
sequenceDiagram
    participant User
    participant MainProgram
    participant Operations
    participant DataProgram

    User->>MainProgram: Select operation (View/Credit/Debit)
    MainProgram->>Operations: CALL 'Operations' USING operation-type
    Operations->>DataProgram: CALL 'DataProgram' USING 'READ', balance (for view/credit/debit)
    DataProgram-->>Operations: Return current balance
    Operations->>User: Display balance (for view)
    
    alt Credit Operation
        Operations->>User: Prompt for credit amount
        User->>Operations: Enter amount
        Operations->>DataProgram: CALL 'DataProgram' USING 'WRITE', updated-balance
        DataProgram-->>Operations: Confirm write
        Operations->>User: Display new balance
    end
    
    alt Debit Operation
        Operations->>User: Prompt for debit amount
        User->>Operations: Enter amount
        Operations->>DataProgram: CALL 'DataProgram' USING 'READ', balance
        DataProgram-->>Operations: Return balance
        alt Sufficient Funds
            Operations->>DataProgram: CALL 'DataProgram' USING 'WRITE', updated-balance
            DataProgram-->>Operations: Confirm write
            Operations->>User: Display new balance
        else Insufficient Funds
            Operations->>User: Display error message
        end
    end
    
    Operations-->>MainProgram: GOBACK
    MainProgram->>User: Continue or exit
```

