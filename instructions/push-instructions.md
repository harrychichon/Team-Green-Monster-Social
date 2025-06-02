# 🧑‍💻 Git-arbetsflöde – steg för steg

Här är en guide för hur du jobbar med branches och pushar till repot på ett strukturerat sätt:

---

## 1. Hämta senaste versionen av `main`

```bash
git checkout main
git pull
```

---

## 2. Skapa och byt till en ny branch

Byt ut `readPosts` mot ett beskrivande namn för det du ska göra.

```bash
git checkout -b readPosts
```

---

## 3. Jobba med din feature eller fix

Gör ändringar, commit\:a som vanligt:

```bash
git add .
git commit -m "Lägg till funktion för att läsa inlägg"
```

---

## 4. Hämta senaste `main` igen (för säkerhets skull)

Innan du slår ihop din branch – se till att `main` är uppdaterad:

```bash
git checkout main
git pull
```

---

## 5. Slå ihop senaste `main` in i din branch

Gå tillbaka till din branch och slå ihop förändringar från `main`:

```bash
git checkout readPosts
git merge main
```

Lös eventuella konflikter om det behövs.

---

## 6. Slå ihop din branch in i `main`

När allt är klart och testat:

```bash
git checkout main
git merge readPosts
```

---

## 7. Skicka upp till GitHub

```bash
git push
```

---

✅ **Klart!** Nu är din kod uppladdad och main är uppdaterad med dina ändringar.
