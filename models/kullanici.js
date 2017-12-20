var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var kullaniciSchema = new Schema(
    {
        kullaniciAdi: {type:String, required: true, unique:true},
        sifre : {type:String, required:true}
    }
    ,{collection :'kullanicilar'});

var Kullanici = mongoose.model('Kullanici', kullaniciSchema);

module.exports = Kullanici;