import { setTextFilter, sortByDate,  sortByAmount, setStartDate, setEndDate } from "../../actions/filters";
import moment from "moment";

test ("should generate default set text filter", () =>
{
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});

test ("should generate set text filter", () =>
{
    const action = setTextFilter("bill")
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "bill"
    });
});


test ("should generate object with sort by date", () =>
{
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    });
});

test("should generate object with sort by amount", () => 
{
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"

    });

});

test("should generate set end date", () => 
{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)

    });

});

