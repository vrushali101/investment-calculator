import { calculateInvestmentResults ,formatter} from "../util/investment";

export default function Results({ input }) {
  //console.log(input);
  const resultData = calculateInvestmentResults(input);
            const initialInvestment=resultData[0].valueEndOfYear-resultData[0].interest-resultData[0].annualInvestment;

  console.log(resultData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest Rate(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
            const totalIntrest=yearData.valueEndOfYear - yearData.annualInvestment * yearData.year-initialInvestment;
         const totalAmountIntrested=yearData.valueEndOfYear-totalIntrest;
            return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>{formatter.format(totalAmountIntrested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
