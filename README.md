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

### Docker
#### api
```
docker build -f docker/api/Dockerfile -t jiko21/arkerfeldt-admin-api .
```

#### frontned
```
docker build -f docker/frontend/Dockerfile -t jiko21/arkerfeldt-admin-frontend .
```
