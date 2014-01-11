This is the MVP for a open data project that will display -> "Fuel economy data are the result of vehicle testing done at the Environmental Protection Agency's National Vehicle and Fuel Emissions Laboratory in Ann Arbor, Michigan, and by vehicle manufacturers with oversight by EPA". 

You can find the data set at [fueleconomy.gov](http://www.fueleconomy.gov/feg/download.shtml). I personaly decided to only query data from 2011-2014, however this can be fixed via dataset variable in api.py.

I am currenly hosting it at my [personal subdomain](http://www.fuel.jarenglover.com). 

This proejct was great at teaching what it takes to host a web app. This included a stack from the OS up to REST API. 

###Services:
* Year
* Make
* All Car Data [via cardata]
* YourSaveSpend
* HighwayMPG
* CityMPG

Please note 

###Node Installation:

####Install application
```
npm install
```

####Install Bower
```
npm install [-g] bower
```


###Django Installation: I recommend using virtualenv !

#### Django dependancies
```
pip install -r requirement_file.txt
```
#####syncdb
```
python manage.py syncdb
```

##### Django enviroment setting - When you use Django, you have to tell it which settings you’re using. 
```
export DJANGO_SETTINGS_MODULE='opendata.settings'
```
#### Run Django Server on port 8732

```
python manage.py runserver 0.0.0.0:1234
```

####Contributors: 
```
Back End OG -->Jaren Glover - @GloveDotcom - www.JarenGlover.com
Front End Capo -> Dan Carter - @dcarter_js
```

