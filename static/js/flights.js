$(document).ready(function(){
    var google = function(){
//        var testObj = {
//          "request": {
//            "passengers": {
//              "adultCount": 1,
//              "childCount": 0,
//              "infantInLapCount": 0,
//              "infantInSeatCount": 0,
//              "seniorCount": 0
//            },
//            "slice": [
//              {
//                "origin": "BOS",
//                "destination": "LAX",
//                "date": "2014-10-30"
//              }
//            ]
//          }
//        };
        var searchObj = {
            "request": {
                "passengers": {},
                "slice": []
            }
        };
        var from = $('#inputFrom').val();
        var to = $('#inputTo').val();
        var date = $('#datetimepicker').val();
        var adults = parseInt($('#selectAdults').val());
        var children = parseInt($('#selectChildren').val());
        var infantLap = parseInt($('#selectInfantLap').val());
        var infantSeat = parseInt($('#selectInfantSeat').val());
        var seniors = parseInt($('#selectSeniors').val());

        searchObj.request.passengers.adultCount = adults;
        searchObj.request.passengers.childCount = children;
        searchObj.request.passengers.infantinLapCount = infantLap;
        searchObj.request.passengers.infantinSeatCount = infantSeat;
        searchObj.request.passengers.seniorCount = seniors;

        searchObj.request.slice.push({
            origin: from,
            destination: to,
            date: date
        });
        console.log(searchObj);
        searchObj = JSON.stringify(searchObj);

        $.ajax({
            url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAJLS34BoN66RWv6yiphRQxcOKdDw5ksnU',
            type: 'POST',
            data: searchObj,
            dataType: 'json',
            contentType: 'application/json',
//            beforeSend: function(){
//                $('#homeScreen').hide();
//                $('.ajax-pane').html('<p>Loading...</p>');
//            },
            success: function(testObj){
                console.log(testObj);
                $('#homeScreen').hide();
                $('#resultHead').html('<td></td>' +
                    '<td>Price</td>' +
                    '<td>Duration</td>' +
                    '<td>Airline</td>' +
                    '<td>Departure</td>' +
                    '<td>Arrival</td>' +
                    '<td>Stops</td>'
                );
                $.each(testObj.trips.tripOption, function(i, item){
                    var price = item.saleTotal;
                    var duration = item.slice[0].duration;
                    var airline = item.pricing[0].fare[0].carrier;
                    var departure = item.slice[0].segment[0].leg[0].departureTime;
                    var arrival = item.slice[0].segment[0].leg[0].arrivalTime;
                    $('#resultBody').append(
                        '<tr><td><a href="#" class="btn btn-primary btn-xs">Buy Now</a></td>'
                        + '<td>' + price + '</td>'
                        + '<td>' + duration + '</td>'
                        + '<td>' + airline + '</td>'
                        + '<td>' + departure + '</td>'
                        + '<td>' + arrival + '</td>'
                        + '<td>' + 'non-stop' + '</td></tr>'
                    )
                });
            },
            error: function(msg){
                console.log('error');
                console.log(msg);
            },
            complete: function(){
                console.log('complete');
            }
        })
    };
    var testTable = function(){
        var testObj = {
         "kind": "qpxExpress#tripsSearch",
         "trips": {
          "kind": "qpxexpress#tripOptions",
          "requestId": "eBJXPDdjvK4zDogeE0JJp3",
          "data": {
           "kind": "qpxexpress#data",
           "airport": [
            {
             "kind": "qpxexpress#airportData",
             "code": "LAX",
             "city": "LAX",
             "name": "Los Angeles International"
            },
            {
             "kind": "qpxexpress#airportData",
             "code": "SFO",
             "city": "SFO",
             "name": "San Francisco International"
            }
           ],
           "city": [
            {
             "kind": "qpxexpress#cityData",
             "code": "LAX",
             "name": "Los Angeles"
            },
            {
             "kind": "qpxexpress#cityData",
             "code": "SFO",
             "name": "San Francisco"
            }
           ],
           "aircraft": [
            {
             "kind": "qpxexpress#aircraftData",
             "code": "320",
             "name": "Airbus A320"
            }
           ],
           "tax": [
            {
             "kind": "qpxexpress#taxData",
             "id": "ZP",
             "name": "US Flight Segment Tax"
            },
            {
             "kind": "qpxexpress#taxData",
             "id": "XF",
             "name": "US Passenger Facility Charge"
            },
            {
             "kind": "qpxexpress#taxData",
             "id": "AY",
             "name": "US September 11th Security Fee"
            },
            {
             "kind": "qpxexpress#taxData",
             "id": "US_1",
             "name": "US Transportation Tax"
            }
           ],
           "carrier": [
            {
             "kind": "qpxexpress#carrierData",
             "code": "VX",
             "name": "Virgin America Inc."
            }
           ]
          },
          "tripOption": [
           {
            "kind": "qpxexpress#tripOption",
            "saleTotal": "USD69.00",
            "id": "faqkIcj6Te2V3Sll2SskwJ001",
            "slice": [
             {
              "kind": "qpxexpress#sliceInfo",
              "duration": 75,
              "segment": [
               {
                "kind": "qpxexpress#segmentInfo",
                "duration": 75,
                "flight": {
                 "carrier": "VX",
                 "number": "922"
                },
                "id": "G4Yqn7Md2QltVrzT",
                "cabin": "COACH",
                "bookingCode": "S",
                "bookingCodeCount": 7,
                "marriedSegmentGroup": "0",
                "leg": [
                 {
                  "kind": "qpxexpress#legInfo",
                  "id": "LFaJowO2NvJzM2Vd",
                  "aircraft": "320",
                  "arrivalTime": "2014-09-19T08:15-07:00",
                  "departureTime": "2014-09-19T07:00-07:00",
                  "origin": "SFO",
                  "destination": "LAX",
                  "originTerminal": "2",
                  "destinationTerminal": "3",
                  "duration": 75,
                  "onTimePerformance": 93,
                  "mileage": 337,
                  "secure": true
                 }
                ]
               }
              ]
             }
            ],
            "pricing": [
             {
              "kind": "qpxexpress#pricingInfo",
              "fare": [
               {
                "kind": "qpxexpress#fareInfo",
                "id": "A+yi0+pn2eL1pf3nKwZazHIVDvsw2Ru8zx5LByC/kQaA",
                "carrier": "VX",
                "origin": "SFO",
                "destination": "LAX",
                "basisCode": "S21NR"
               }
              ],
              "segmentPricing": [
               {
                "kind": "qpxexpress#segmentPricing",
                "fareId": "A+yi0+pn2eL1pf3nKwZazHIVDvsw2Ru8zx5LByC/kQaA",
                "segmentId": "G4Yqn7Md2QltVrzT",
                "freeBaggageOption": [
                 {
                  "kind": "qpxexpress#freeBaggageAllowance",
                  "pieces": 0
                 }
                ]
               }
              ],
              "baseFareTotal": "USD53.95",
              "saleFareTotal": "USD53.95",
              "saleTaxTotal": "USD15.05",
              "saleTotal": "USD69.00",
              "passengers": {
               "kind": "qpxexpress#passengerCounts",
               "adultCount": 1
              },
              "tax": [
               {
                "kind": "qpxexpress#taxInfo",
                "id": "US_1",
                "chargeType": "GOVERNMENT",
                "code": "US",
                "country": "US",
                "salePrice": "USD4.05"
               },
               {
                "kind": "qpxexpress#taxInfo",
                "id": "AY",
                "chargeType": "GOVERNMENT",
                "code": "AY",
                "country": "US",
                "salePrice": "USD2.50"
               },
               {
                "kind": "qpxexpress#taxInfo",
                "id": "XF",
                "chargeType": "GOVERNMENT",
                "code": "XF",
                "country": "US",
                "salePrice": "USD4.50"
               },
               {
                "kind": "qpxexpress#taxInfo",
                "id": "ZP",
                "chargeType": "GOVERNMENT",
                "code": "ZP",
                "country": "US",
                "salePrice": "USD4.00"
               }
              ],
              "fareCalculation": "SFO VX LAX 53.95S21NR USD 53.95 END ZP SFO XT 4.05US 4.00ZP 2.50AY 4.50XF SFO4.50",
              "latestTicketingTime": "2014-02-05T23:59-05:00",
              "ptc": "ADT"
             }
            ]
           }
          ]
         }
        };
        $('#homeScreen').hide();
        $('#resultHead').html('<td></td>' +
            '<td>Price</td>' +
            '<td>Duration</td>' +
            '<td>Airline</td>' +
            '<td>Departure</td>' +
            '<td>Arrival</td>' +
            '<td>Stops</td>'
        );

        $.each(testObj.trips.tripOption, function(i, item){
            $('#resultBody').append(
                '<tr><td><a href="#" class="btn btn-primary btn-xs">Buy Now</a></td>'
                + '<td>' + item.saleTotal + '</td>'
                + '<td>' + item.slice[0].duration + '</td>'
                + '<td>' + item.pricing[0].fare[0].carrier + '</td>'
                + '<td>' + item.slice[0].segment[0].leg[0].arrivalTime + '</td>'
                + '<td>' + item.slice[0].segment[0].leg[0].departureTime + '</td>'
                + '<td>' + 'non-stop' + '</td></tr>'
            )
        });
    };
    $('#flightSearch').click(function(){
        google();
        return false;
    });
});