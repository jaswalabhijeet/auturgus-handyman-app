var mongoose = require('mongoose');
/* database setup */

var Jobs = mongoose.model('jobs', {
     status: {type: Boolean, required: true},
     orders: [{
          wall: {type: String},
          brackets: {type: String},
          gt32: {type: String},
          numHoles: {type: String},
          sizeHole: {type: String},
          typeWall: {type: String},
          numFans: {type: String},
          installType: {type: String},
          haveFan: {type: String},
          needLadder: {type: String},
          numHours: {type: Number},
          timeStamp: { type: Date},
          // date: {type: Date},
          // time: {type: String},
          total: {type: String, required: true},
          description: {type: String}
     }],
     total: {type: Number, required: true},
     description: {type: String},
     providerId: {type: String},
     providerName: {type: String},
     requesterId: {type: String, required: true},
     requesterName: {type: String, required: true}
});

module.exports = Jobs;
