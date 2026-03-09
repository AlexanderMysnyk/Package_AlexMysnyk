namespace Terrasoft.Configuration
{
    using System.Globalization;

    [ExpressionConverterAttribute("CurrencySymbol")]
    public class CurrencySymbol : IExpressionConverter
    {
        public string Evaluate(object value, string arguments = "") {
            if(double.TryParse(value?.ToString(), out var currency)) {
                return currency.ToString("C", new CultureInfo("en-US"));
            }

            return "";
        }
    }
}
