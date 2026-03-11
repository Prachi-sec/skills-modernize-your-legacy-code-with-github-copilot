# Modernize your legacy code with GitHub Copilot

<img src="https://octodex.github.com/images/Professortocat_v2.png" align="right" height="200px" />

Hey Prachi-sec!

Mona here. I'm done preparing your exercise. Hope you enjoy! 💚

Remember, it's self-paced so feel free to take a break! ☕️

[![](https://img.shields.io/badge/Go%20to%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/Prachi-sec/skills-modernize-your-legacy-code-with-github-copilot/issues/1)

---

&copy; 2025 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)

## Application Sequence Diagram

```mermaid
sequenceDiagram
    participant User
    participant MainProgram
    participant Operations
    participant DataProgram

    User->>MainProgram: Select operation (1-4)
    MainProgram->>Operations: CALL 'Operations' USING operation-type
    alt View Balance
        Operations->>DataProgram: CALL 'DataProgram' USING 'READ', balance
        DataProgram-->>Operations: Return current balance
        Operations-->>User: Display current balance
    else Credit Account
        User->>Operations: Enter credit amount
        Operations->>DataProgram: CALL 'DataProgram' USING 'READ', balance
        DataProgram-->>Operations: Return current balance
        Operations->>Operations: Add amount to balance
        Operations->>DataProgram: CALL 'DataProgram' USING 'WRITE', new-balance
        Operations-->>User: Display new balance
    else Debit Account
        User->>Operations: Enter debit amount
        Operations->>DataProgram: CALL 'DataProgram' USING 'READ', balance
        DataProgram-->>Operations: Return current balance
        alt Sufficient funds
            Operations->>Operations: Subtract amount from balance
            Operations->>DataProgram: CALL 'DataProgram' USING 'WRITE', new-balance
            Operations-->>User: Display new balance
        else Insufficient funds
            Operations-->>User: Display insufficient funds message
        end
    end
    MainProgram-->>User: Continue or exit
```

