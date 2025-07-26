## Object-Oriented Relationships (OOP) – README Summary

This document outlines the key structural relationships in Object-Oriented Programming: **Association**, **Aggregation**, **Composition**, and **Dependency**. These relationships describe how classes and objects interact with each other and are fundamental for designing robust and maintainable software systems.

Each section includes:

- Definition
- Intent and Characteristics
- UML Representation
- Comparative Overview

---

### 1. Association

**Definition:** Association is a general binary relationship that describes an activity between two classes. It implies that objects of one class are connected or interact with objects of another.

**Intent and Characteristics:**

- Represents a **structural relationship** between objects.
- It indicates that one class **knows about** or **uses** another.
- Can be **unidirectional** or **bidirectional**.
- No ownership; both objects can exist independently.

**UML Representation:**

- A plain solid line between two classes.

```
ClassA ---------------- ClassB
```

---

### 2. Aggregation

**Definition:** Aggregation is a **special form of association** where one class represents a **whole**, and the other represents its **parts**, but with a **non-dependent lifecycle**.

**Intent and Characteristics:**

- "Has-a" relationship (e.g., a University has Departments).
- The **part can exist independently** of the whole.
- Implies **ownership without strong lifecycle management**.

**UML Representation:**

- A solid line with a **hollow diamond** pointing toward the whole.

```
ClassA <>------------- ClassB
```

---

### 3. Composition

**Definition:** Composition is a stronger form of aggregation. It implies that the contained object **cannot exist independently** of the container.

**Intent and Characteristics:**

- Represents a **strong lifecycle dependency**.
- When the container is destroyed, so are the contained objects.
- Commonly seen in scenarios like a House containing Rooms.

**UML Representation:**

- A solid line with a **filled diamond** pointing toward the whole.

```
ClassA ◆------------- ClassB
```

---

### 4. Dependency

**Definition:** Dependency is a **temporary, one-directional relationship** where one class depends on another to perform its operations, typically through method parameters or local variables.

**Intent and Characteristics:**

- Indicates a **usage** relationship.
- Changes in the used class may affect the dependent class.
- Used in service interaction, helpers, or temporary collaborations.

**UML Representation:**

- A **dashed arrow line** pointing from dependent to the provider.

```
ClassA - - - - - - - -> ClassB
```

---

### ✅ Comparison Table

| Relationship | Lifespan Tied? | Ownership | Strength  | UML Indicator     | Example Concept         |
| ------------ | -------------- | --------- | --------- | ----------------- | ----------------------- |
| Association  | No             | No        | Weak      | Plain line        | Teacher ↔ Student       |
| Aggregation  | No             | Yes       | Moderate  | Hollow diamond    | University → Department |
| Composition  | Yes            | Yes       | Strong    | Filled diamond    | House → Rooms           |
| Dependency   | Temporary      | No        | Very Weak | Dotted arrow line | Service → Helper class  |

---

### ✅ Summary:

- Use **Association** to connect related classes that collaborate without strong ownership.
- Use **Aggregation** when a class owns another, but the parts can outlive the whole.
- Use **Composition** when parts are strictly bound to the container's lifecycle.
- Use **Dependency** to show lightweight, transient usage of another class.

Understanding and applying these relationships appropriately leads to **cleaner**, **modular**, and **maintainable** code architectures.

