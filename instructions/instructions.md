## Använd kontexten i komponenter via useSocialContext

I komponenter som behöver läsa eller ändra global state, använd custom hooken `useSocialContext` för att komma åt data och metoder:

```tsx
import { useSocialContext } from "../context/useSocialContext";

const MyComponent = () => {
  const { monsters, setMonsters, posts, setPosts } = useSocialContext();

  // Använd monsters och posts som vanligt här

  return (
    <div>
      {/* exempel på rendering */}
      {monsters.map((monster) => (
        <p key={monster.id}>{monster.userName}</p>
      ))}
    </div>
  );
};
```

---

## Viktigt

- `useSocialContext` hämtar värden från `SocialContext` och ger alltid rätt typ
- Den hanterar även kontroll av om kontexten är `null` och kan kasta fel om den används utanför providern
- All global state för monsters och posts hanteras centralt via denna kontext

---
