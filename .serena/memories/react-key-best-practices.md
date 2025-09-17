# React Key Best Practices

## ❌ NEVER use array index as React key

**Bad examples:**
```tsx
// DON'T DO THIS - using index
items.map((item, index) => <Item key={index} />)

// DON'T DO THIS - generating random keys
items.map(item => <Item key={Math.random()} />)
```

## ✅ DO use stable, unique identifiers

**Good examples:**
```tsx
// Use unique ID from data
items.map(item => <Item key={item.id} />)

// Combine multiple properties for uniqueness
items.map(item => <Item key={`${item.type}-${item.name}-${item.timestamp}`} />)

// For objects with no ID, use a combination of stable properties
skills.map(skill => 
  <Item key={`${skill.skillName}-${skill.type}-${skill.type === 'expiring' ? skill.endsAfter : 'perpetual'}`} />
)
```

## Why this matters:
- Array index keys cause React to incorrectly match components during re-renders
- This leads to subtle bugs, lost component state, and performance issues
- When items are reordered/inserted/deleted, React gets confused about which component is which
- Always use data that uniquely identifies the item being rendered

## Memory commitment:
Always use stable, data-based keys that uniquely identify each list item. Never use array index or randomly generated keys.