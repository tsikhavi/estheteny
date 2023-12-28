import React from 'react';
import DateTimePicker from 'react-tailwindcss-datetimepicker';

interface Props {}
interface State {
  start: Date;
  end: Date;
}

const now = new Date();
const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);

const endOfToday = new Date(startOfToday);
endOfToday.setDate(endOfToday.getDate() + 1);
endOfToday.setSeconds(endOfToday.getSeconds() - 1);

class BookDate extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // Set the initial view of picker to last 2 days
    this.state = {
      start: new Date(new Date().setDate(new Date().getDate() - 2)),
      end: endOfToday,
    };
  }

  applyCallback = (startDate: Date, endDate: Date) => {
    this.setState({
      start: startDate,
      end: endDate,
    });
  };

  render() {
    return (
      <DateTimePicker
        ranges={{
          Today: [new Date(startOfToday), new Date(endOfToday)],
          'Last 30 Days': [
            new Date(now.getFullYear(), now.getMonth() - 1, now.getDate(), 0, 0, 0, 0),
            new Date(endOfToday),
          ],
        }}
        start={this.state.start}
        end={this.state.end}
        applyCallback={this.applyCallback}
        displayMaxDate
      >
        <button type="button">{`${this.state.start} - ${this.state.end}`}</button>
      </DateTimePicker>
    );
  }
}

export default BookDate;
