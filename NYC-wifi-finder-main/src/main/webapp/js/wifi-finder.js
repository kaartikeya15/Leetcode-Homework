var icons = {
    Free: 'css/free.svg',
    'Limited Free': 'css/limited-free.svg',
    'Partner Site': 'css/partner-site.svg'
}

function getScale(resolution) {
    var zoom = nyc.ol.TILE_GRID.getZForResolution(resolution)
}

function style(feature, resolution) {
    var type = feature.get('TYPE');
    return new ol.style.Style({
        image: new ol.style.Icon({
            src: icons[type],
            scale: nyc.ol.TILE_GRID.getZForResolution(resolution) * 1.5 / 512,
            imgsize: [512, 512]
        })
    })
}
new nyc.ol.FinderApp({
    title: 'Wi-Fi Locator',
    geoclientUrl: 'https://maps.nyc.gov/geoclient/v1/search.json?app_key=74DF5DB1D7320A9A2&app_id=nyc-lib-example',
    /*directionsUrl: 'https://maps.googleapis.com/maps/api/js?client=gme-newyorkcitydepartment&channel=pka&sensor=false&libraries=visualization',*/
    facilityTabTitle: 'Wi-Fi Hotspots',
    facilityUrl: 'https://data.cityofnewyork.us/api/views/varh-9tsp/rows.csv?accessType=DOWNLOAD',
    facilityFormat: new nyc.ol.format.CsvPoint({
        x: 'X',
        y: 'Y',
        defaultDataProjection: 'EPSG:2263'
    }),
    facilityStyle: style,
    filterChoiceOptions: [{
            title: 'Wifi Type',
            choices: [
                { name: 'TYPE', values: ['Free'], label: 'Free', checked: true },
                { name: 'TYPE', values: ['Limited Free'], label: 'Limited Free', checked: true },
                { name: 'TYPE', values: ['Partner Site'], label: 'Partner Site', checked: true },
            ]
        },
        {
            title: 'Location Type',
            choices: [
                { name: 'LOCATION_T', values: ['Outdoor', 'Outdoor TWC Aerial', 'Outdoor Kiosk'], label: 'Outdoor' },
                { name: 'LOCATION_T', values: ['Library'], label: 'Library ' },
                { name: 'LOCATION_T', values: ['Subway Station'], label: 'Subway Station' },
                { name: 'LOCATION_T', values: ['Indoor', 'Indoor AP - Community Center - Gym', 'Indoor AP - Community Center - Cafeteria', 'Indoor AP - Community Center - Activity Rm 1', 'Indoor AP - Community Center - Activity Rm 2'], label: 'Indoor' }
            ]
        }
    ],
    decorations: [{
        html: function() {
            return $('<div class="facility"></div>')
                .addClass(this.cssClass())
                .append(this.distanceHtml())
                .append(this.nameHtml())
                .append(this.addressHtml())
                .append(this.typeHtml())
                .append(this.providerHtml())
                .append(this.mapButton())
        },
        getName: function() {
            return this.get('SSID')
        },
        getAddress1: function() {
            return this.get('LOCATION')
        },
        getBorough: function() {
            return {
                MN: 'Manhattan',
                BX: 'Bronx',
                QU: 'Queens',
                BK: 'Brooklyn',
                SI: 'Staten Island'
            }[this.get('BORO')]
        },
        getCityStateZip: function() {
            return `${this.getBorough()}, NY ${this.get('POSTCODE')}`
        },
        providerHtml: function() {
            return $('<div class="provider"><b>Provider: </b></div>')
                .append(this.get('PROVIDER'))
        },
        typeHtml: function() {
            return $('<div class="type"><b>Type: </b></div>')
                .append(this.get('TYPE'))
        },
        cssClass: function() {
            return this.get('TYPE').toLowerCase().replace(/ /, '-')
        },
        getFullAddress: function() {
            var coordinates = proj4('EPSG:3857', 'EPSG:4326', this.getGeometry().getCoordinates());
            return coordinates[1] + ',' + coordinates[0];
        }
    }]
});