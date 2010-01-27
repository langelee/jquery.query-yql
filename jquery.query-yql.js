/*!
 * jQuery Plugin: Query YQL - version 0.3
 * http://github.com/hail2u/jquery.query-yql
 * Query YQL simply.
 *
 * Copyright (c) 2009 Kyo Nagashima <kyo@hail2u.net>
 * This library licensed under MIT license:
 * http://opensource.org/licenses/mit-license.php
 */
(function ($) {
  $.queryYQL = function (statement, type, envUrl, callback) {
    var data = {};
    
    if ($.isFunction(type)) {
      callback = type;
      type     = "json";
    } else if ($.isPlainObject(type)) {
      data     = type;
      type     = "json";
    } else if (!type.match(/(json|xml)/)) {
      callback = envUrl;
      envUrl   = type;
      type     = "json";
    }
    
    if ($.isFunction(envUrl)) {
      callback = envUrl;
      envUrl   = undefined;
    } else if (envUrl === "all") {
      envUrl = "http://datatables.org/alltables.env";
    }
    
    // Always override format and query
    data.format = type;
    data.q      = statement;
    if (envUrl) data.env = envUrl;
    
    return $.get($.queryYQL.endpoint, data, callback, "json");
  };
  $.queryYQL.endpoint = "http://query.yahooapis.com/v1/public/yql?callback=?";
})(jQuery);
