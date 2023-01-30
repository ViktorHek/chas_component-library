# Skapa ett komponent-bibliotek

I dagens uppgift ska ni få öva på att skapa komponenter som är gjorda för att återanvändas.

### Sätt upp projektet

1. Öppna en terminal och gå med `cd` där du vill skapa projektet.
2. Skriv `npm create vite@latest component-library -- --template react`.
3. Gå in i projektet: `cd component-library`.
4. Installera dependencies: `npm install`.
5. Om ni vill använda tailwind: Följ guiden från steg 2. [Install Tailwind](https://tailwindcss.com/docs/guides/vite)

## Hur du klarar uppgiften

Skapa alla komponenter nedan och presentera dom i App.jsx. Varje komponent ska
presenteras med en rubrik och hur den ser ut med olika props. Med modal-komponenten räcker
det med att visa hur den fungerar med en knapp som öppnar modalen. Obligatoriska props listas
för varje komponent, men ni får gärna skapa flera props. Ta inspiration från länkarna
på varje komponent.

1. [Buttons](https://flowbite-react.com/buttons)  
   Obligatoriska Props: size, color, disabled

1. [Alerts](https://flowbite-react.com/alerts)  
   Obligatoriska Props: color, icon, onDismiss

1. [Badges](https://flowbite-react.com/badges)  
   Obligatoriska Props: color, size, icon

1. [Card](https://flowbite-react.com/card)  
   Obligatoriska Props: href, imgAlt, imgSrc

1. [Modal](https://flowbite-react.com/modal)  
   Obligatoriska Props: show, onClose, size  
   Obligatoriska komponenter: Modal, Modal.Header, Modal.Body, Modal.Footer  
   

### :runner: Extrauppgifter

Klar? Här är lite mer att göra:

1. Välj ut och skapa fler komponenter från [denna sida](https://flowbite-react.com/)
2. Använd react router för att skapa sidor för varje komponent och skapa en sida som
   länkar till alla sidor likt länken ovan.

## Hur du lämnar in

1. Skapa ett repo på github.
2. Ladd up dina filer till github:

```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <Adressen till ditt repo>
git push -u origin main
```

3. Klicka på uppgiften i canvas och ange länken till ditt repo.

---

### :boom: Success!

Efter denna uppgift ska ni kunna skapa återanvändbara komponenter i React.

---
