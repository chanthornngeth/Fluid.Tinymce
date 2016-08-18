tinymce.PluginManager.add('fluid', function (editor) {
    console.log('load fluid');


    editor.addButton('fluid', {
        type: 'menubutton',
        text: 'Variables',
        icon: false,
        menu: [
            {
                text: 'Section',
                menu: [
                    {
                        text: 'Subject',
                        onclick: function () {
                            editor.insertContent(templates['emailSubject']);
                        }
                    },
                    {
                        text: 'Title',
                        onclick: function () {
                            editor.insertContent(templates['titleSection']);
                        }
                    }
                ]
            },
            {
                text: 'Participant',
                menu: [
                    {
                        text: 'Nmae',
                        onclick: function () {
                            editor.insertContent(templates['participantName']);
                        }
                    },
                    {
                        text: 'Email',
                        onclick: function () {
                            editor.insertContent(templates['participantEmail']);
                        }
                    }
                ]
            },
            {
                text: 'Event',
                menu: [
                    {
                        text: 'Title',
                        onclick: function () {
                            editor.insertContent(templates['eventTitle']);
                        }
                    },
                    {
                        text: 'Event identifier',
                        onclick: function () {
                            editor.insertContent(templates['eventIdentifier']);
                        }
                    }
                ]

            },
            {
                text: 'Team',
                menu: [
                    {
                        text: 'Team captain',
                        onclick: function () {
                            editor.insertContent(templates['teamCaptain']);
                        }
                    },
                    {
                        text: 'Team name',
                        onclick: function () {
                            editor.insertContent(templates['teamName']);
                        }
                    },
                    {
                        text: 'Team member name',
                        onclick: function () {
                            editor.insertContent(templates['teamMemberName']);
                        }
                    }
                ]

            },
            {
                text: 'Booking',
                menu: [
                    {
                        text: 'Booking number',
                        onclick: function () {
                            editor.insertContent(templates['bookingNumber']);
                        }
                    },
                    {
                        text: 'Included VAT',
                        onclick: function () {
                            editor.insertContent(templates['bookingIncludedVAT']);
                        }
                    },
                    {
                        text: 'Excluded VAT',
                        onclick: function () {
                            editor.insertContent(templates['bookingIncludedVAT']);
                        }
                    },
                    {
                        text: 'Booking Details',
                        onclick: function () {
                            editor.insertContent(templates['bookingDetail']);
                        }
                    }
                ]
            }
        ]
    });


    var templates = {
        // section
        emailSubject: '<f:section name="EmailSubject">Subject</f:section>',
        titleSection: '<f:section name="Title">Swisscom Games - {event.title} </f:section>',

        // event
        eventTitle: '{event.title}',
        eventIdentifier: '{event.identifier}',

        // participant
        participantName: '{participant.user.name}',
        participantEmail: '{participant.user.email}',

        // team
        teamCaptain: '{team.teamCaptain.user.name}',
        teamName: '{team.name}',
        teamMemberName: '{teamMember.user.name}',

        // booking
        bookingIncludedVAT: httpGet('vendor/tinymce/tinymce/plugins/fluid/templates/bookingIncludeVAT.html'),
        bookingDetail: httpGet('vendor/tinymce/tinymce/plugins/fluid/templates/bookingDetail.html'),
        bookingNumber: '{booking.bookingNr}'
    };

    function httpGet(theUrl)
    {
        var xmlHttp = null;

        xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false );
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }

});
