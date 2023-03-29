# VoterBack

backend levantado en [render](https://voterback.onrender.com/)

Rutas:

| Metodo | Ruta           | Parametro/s                        | Descripcion                                             |
|--------|----------------|------------------------------------|---------------------------------------------------------|
| POST   | /api/votes     | firstTeam, lastTeam, winner, fanOf | Crea una nueva votacion en la DB                        |
| GET    | /api/votes     |                                    | Retorna todas las votaciones efectuadas                 |
| GET    | /api/votes/:id | id                                 | Retorna la votacion del ID pasado por parametro         |
| GET    | /wins/:name    | name                               | Retorna la cantidad de votaciones ganadas por un equipo |
| GET    | /rate/:name    | name                               | Retorna el porcentaje de victorias de un equipo         |
| GET    | /rate          |                                    | Retorna el porcentaje de victorias de todos los equipos |
| GET    | /count         |                                    | Retorna la cantidad de votaciones efectuadas            |
