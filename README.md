# EXADS Code Challenge

## Running api
```
npm ci --silent
npm run start
```
Example:
```
curl --request POST \
  --url http://localhost:8080/ \
  --header 'Content-Type: application/json' \
  --cookie _csrf=Kwu11VaAHVLIEFzQJq-rriri \
  --data '{
	"message": "That'\''s one small step for man, one giant leap for mankind."
}'
```
## Running local unit tests
```
npm t
```