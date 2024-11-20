#################################################
# JSON Variables to pass through while testing #
#################################################

# create new car or update car
{
    "color": "green",
    "electric": false,
    "id": "11111111222233334444555555555555",
    "make": "jeep",
    "model": "cherokee",
    "releaseYear": 2019
}

# list car or delete car by uuid
{
    "id": "11111111222233334444555555555555"
}

# list all cars
{
    "orderByModel": "ASC",
    "orderByRelYear": "ASC",
    "limit": 10
}
