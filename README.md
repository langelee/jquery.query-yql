TITLE
=====

jQuery Plugin: Query YQL - version 0.3

DESCRIPTION
===========

Query YQL simply.

Usage
=====

Query YQL:

    var statement = "select * from feed where url='http://example.com/rss'";
    $.queryYQL(statement, function (data) {
      // do something with "data".
    });

Query YQL (full):

    var statement = "select * from feed where url='http://example.com/rss'";
    $.queryYQL(statement, "json", undefined, function (data) {
      // do something with "data".
    });

Query YQL with JSONP-X:

    var statement = "select * from html where url='http://example.com/' and xpath='//h1'";
    $.queryYQL(statement, "xml", function (data) {
      // do something with "data".
    });

Query YQL with Open Data Tables:

    var statement = "select * from twitter.user.timeline where id='hell2u'";
    $.queryYQL(statement, "all", function (data) {
      // do something with "data".
    });

Query YQL with Open Data Tables (custom URL):

    var statement = "select * from twitter.user.timeline where id='hell2u'";
    $.queryYQL(statement, "http://example.com/tables.env", function (data) {
      // do something with "data".
    });

Query YQL with Query Parameters:
    var statement = "select * from twitter.user.timeline where id=@username";
    $.queryYQL(statement, {username:"hell2u"}, "all", function (data) {
      // do something with "data".
    });

LICENSE
=======

Copyright (c) 2009 Kyo Nagashima <kyo@hail2u.net>  
This library licensed under MIT license:  
http://opensource.org/licenses/mit-license.php
