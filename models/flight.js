import mongoose from "mongoose"

const Schema = mongoose.Schema 

const ticketSchema = new Schema ({
  content: String,
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price:{type: Number, min: 0, max: 9999, default: 10}
})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
    type: Number,
    min: 10, max: 9999

  },
  departs: {
    type: Date,
    default: function createDate (){
      let today = new Date();
      let oneYearFromToday = new Date(today.getTime());
      oneYearFromToday.setFullYear(today.getFullYear() + 1);
      return oneYearFromToday
    },
  },
  tickets: [ticketSchema],
  menu: [{type: Schema.Types.ObjectId, ref: 'Meal'}]
})

const Flight = mongoose.model('Flight', flightSchema)


export {
  Flight
}