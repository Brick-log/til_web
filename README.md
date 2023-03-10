# TIL_WEB

Kick off your project with this boilerplate.

# π Quick Start

```bash
git clone
cd
npm install
npm run dev
```

your site is now running at `http://localhost:3000`

# π Folder Structure

A quick look at the directories you'll see in this project.

### Root driectory layout

    .
    βββ assets              #
      βββ fonts
      βββ images
      βββ svgs
    βββ components          #
      βββ common
    βββ constants           #
    βββ hooks               # Custom hooks/queries
    βββ pages               #
    βββ stores              # (alternatively `store`)
    βββ styles              
    βββ utils               #
    βββ types               #
    βββ README.md           #
    βββ ...

### πͺ Others

Always use camelCase for others.

- scripts
- folders
- variables
- functions

# π Rules

## Git-flow

- main - release - develop branch // feature branch
- main : νμ μ μ§λ§μ μν λΈλμΉ
- release : μ€μ  λ°°ν¬λ₯Ό μν λΈλμΉ
- develop : κ°λ° νμ€νΈ λ° QA μμ μ§νμ© λΈλμΉ
- release μμ λΈλμΉ λ°μ μμ ν develop λΈλμΉμ merge
- develop > release merge μ code review μ§ν
- μ£ΌκΈ°μ  νμ μ μ§λ₯Ό μν΄ release > main λΈλμΉ μ±ν¬ μ μ§

## Code-Review

- develop > release merge μ μ½λλ¦¬λ·° μ§ν
- μ  μΈμ ν¨κ» μ½λ νμ μ§ν
- + λ£° κ°λ° μ§ννλ©΄μ μ λ¦½


## π Naming

### π¨βπ¦³ React Component

- **Extensions:** Use .tsx extension for React components.

- **Filename:** Use PascalCase for filenames. E.g., ReservationCard.tsx.

- **Reference Naming:** Use PascalCase for React components and camelCase for their instances.

  ```tsx
  // bad
  import reservationCard from './ReservationCard';

  // good
  import ReservationCard from './ReservationCard';

  // bad
  const ReservationItem = <ReservationCard />;

  // good
  const reservationItem = <ReservationCard />;
  ```
## π Commit Message

### λ©μμ§ κ΅¬μ‘°
μ»€λ° λ©μμ§λ μΈκ°μ§ ννΈλ‘ λλκ³  κ° ννΈλ λΉμ€μ λμ΄μ κ΅¬λΆν©λλ€.

```
type: subject
body(μ΅μ)
footer(μ΅μ)
```

- type : μ΄λ€ μλλ‘ μ»€λ°νλμ§λ₯Ό typeμ λͺμν©λλ€. μμΈν μ¬ν­μ μλμ μ€λͺνκ² μ΅λλ€.
- subject : μ΅λ 50κΈμκ° λμ§ μλλ‘ νκ³  λ§μΉ¨νλ μ°μ§ μμ΅λλ€. μλ¬ΈμΌλ‘ νκΈ°νλ κ²½μ° λμ¬(μν)μ κ°μ₯ μμ λκ³  μ²«κΈμλ λλ¬Έμλ‘ νκΈ°ν©λλ€. 
- body: κΈ΄ μ€λͺμ΄ νμν κ²½μ°μ μμ±ν©λλ€. μ΄λ»κ² νλμ§κ° μλλΌ, λ¬΄μμ μ νλμ§ μμ±ν©λλ€. μ΅λ 75κΈμλ₯Ό λκΈ°μ§ μλλ‘ ν©λλ€.
- footer : issue tracker IDλ₯Ό λͺμνκ³  μΆμ κ²½μ°μ μμ±ν©λλ€.

### νμ type
- feat : μλ‘μ΄ κΈ°λ₯ μΆκ°
- fix : λ²κ·Έ μμ 
- docs : λ¬Έμμ μμ 
- style : (μ½λμ μμ  μμ΄) μ€νμΌ(style)λ§ λ³κ²½(λ€μ¬μ°κΈ° κ°μ ν¬λ§·μ΄λ μΈλ―Έμ½λ‘ μ λΉΌλ¨Ήμ κ²½μ°)
- refactor : μ½λλ₯Ό λ¦¬νν λ§
- test : Test κ΄λ ¨ν μ½λμ μΆκ°, μμ 
- chore : (μ½λμ μμ  μμ΄) μ€μ μ λ³κ²½

# β­οΈ Stack

- **Framework:** Next.js
- **Library:** React 18
- **State Management:** React Query, Recoil
- **Styling:** Emotion
