## arkerfeldt
arkerfeldt CMS system.

### setup
install deps
```bash
npm ci
```

generate model
```bash
npm run prisma:generate
```

push db table
```bash
npx prisma db push --schema packages/api/prisma/schema.prisma
```

### start server
```bash
npm run dev
```

### lint
```bash
npm run lint
```

### testing
```bash
npm run test
```
