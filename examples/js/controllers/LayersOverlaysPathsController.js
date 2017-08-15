        app.controller('LayersOverlaysPathsController', [ '$scope', function($scope) {
            var markers = {
                London : {
                    lat: 51.50,
                    lng: -0.082,
                    draggable: false
                },
                Manchester: {
                    lat: 53.48,
                    lng: -2.24,
                    draggable: true
                },
                Lincoln: {
                    lat: 53.230495,
                    lng: -0.53936,
                    draggable: true
                },
                Northhampton: {
                    lat: 52.237892,
                    lng: -0.90087,
                    draggable: true
                },
                Worcester: {
                    lat: 52.187404,
                    lng: -2.20275,
                    draggable: true
                },
                York: {
                    lat: 53.959317,
                    lng: -1.08215,
                    draggable: true
                }
            };
            angular.extend($scope, {
                cen: {
                    lat: 53,
                    lng: -3,
                    zoom: 6
                },
                layers: {
                    baselayers: {
                        osm: {
                            name: 'OpenStreetMap',
                            type: 'xyz',
                            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                            layerOptions: {
                                subdomains: ['a', 'b', 'c'],
                                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                                continuousWorld: true
                            }
                        },
                        cycle: {
                            name: 'OpenCycleMap',
                            type: 'xyz',
                            url: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
                            layerOptions: {
                                subdomains: ['a', 'b', 'c'],
                                attribution: '&copy; <a href="http://www.opencyclemap.org/copyright">OpenCycleMap</a> contributors - &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                                continuousWorld: true
                            }
                        }
                    },
                    overlays: {
                        hillshade: {
                            name: 'Hillshade Europa',
                            type: 'wms',
                            url: 'http://129.206.228.72/cached/hillshade',
                            visible: true,
                            layerOptions: {
                                layers: 'europe_wms:hs_srtm_europa',
                                format: 'image/png',
                                opacity: 0.25,
                                attribution: 'Hillshade layer by GIScience http://www.osm-wms.de',
                                crs: L.CRS.EPSG900913
                            }
                        },
                        fire: {
                            name: 'OpenFireMap',
                            type: 'xyz',
                            url: 'http://openfiremap.org/hytiles/{z}/{x}/{y}.png',
                            layerOptions: {
                                attribution: '&copy; <a href="http://www.openfiremap.org">OpenFireMap</a> contributors - &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                                continuousWorld: true
                            }
                        },
                        lines: {
                            name: 'Lines',
                            type: 'group',
                            visible: true
                        },
                        shapes: {
                            name: 'Shapes',
                            type: 'group',
                            visible: false
                        }
                    }
                },
                markers: markers,
                paths: {
                    p1: {
                        color: '#008000',
                        weight: 4,
                        latlngs: [ markers.London, markers.Manchester ],
                        layer: 'lines'
                    },
                    p2: {
                        weight: 3,
                        opacity: 0.5,
                        latlngs: [
                            [ markers.London, markers.Lincoln ],
                            [ markers.Manchester, markers.Worcester]
                        ],
                        type: 'polyline',
                        layer: 'lines'
                    },
                    c1: {
                        weight: 2,
                        color: '#ff612f',
                        latlngs: markers.Northhampton,
                        radius: 10000,
                        type: 'circle',
                        layer: 'shapes'
                    },
                    c2: {
                        weight: 2,
                        color: '#ff612f',
                        latlngs: markers.Lincoln,
                        radius: 50,
                        type: 'circleMarker',
                        layer: 'shapes'
                    },
                    pg1: {
                        latlngs: [ markers.London, markers.Worcester, markers.Lincoln ],
                        stroke: false,
                        fillColor: '#ff69b4',
                        type: 'polygon',
                        layer: 'shapes'
                    },
                    pg2: {
                        weight: 1,
                        color: '#2e3974',
                        latlngs: [
                            [ markers.London, markers.Worcester, markers.Northhampton ],
                            [ markers.Manchester, markers.Lincoln, markers.York ]
                        ],
                        type: 'polygon',
                        layer: 'shapes'
                    },
                    r1: {
                        latlngs: [ markers.Lincoln, markers.York ],
                        type: 'rectangle',
                        layer: 'shapes'
                    }
                }
            });
        } ]);