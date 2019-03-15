const fs = require('fs');
const sqlws = fs.createWriteStream('./sql-xiao.sql')

const tablename = 'park_sight';
fs.readFile('xiao.geojson', function (err, data) {
  var json = JSON.parse(data);
  // console.log(json);
  // console.log(`SELECT ST_AsText(ST_GeomFromGeoJSON(' ${JSON.stringify(json.features[0].geometry)} '))`);
  let datasql =`insert into ${tablename} (id,park_id,name,geom) values `;
  let datas = [];
  for(var i = 0; i< json.features.length;i++){
  // for (var i = 0; i < 1; i++) {
    let feature = json.features[i];
     datasql += ` (${i + 1},1,'${feature.properties.Name}', ST_GeomFromText(ST_AsText(ST_GeomFromGeoJSON(' ${JSON.stringify(feature.geometry)} ')))), `;
  }
  sqlws.write(datasql);


})