# TRAVEL BLOG : LABB3 Backendprogrammering

## IT Högskola

[<img src="./backend/ER-diagram.png" width="550"/>](ER-Diagram)

```javascript
// SQL endpoint that relate info between all tables
router.get('/api/country-city-info', countryController.getAllInfoCountryCity)

router.get(
  '/api/country-city-info/:id',
  countryController.getCountryCityInfoById
)
```
