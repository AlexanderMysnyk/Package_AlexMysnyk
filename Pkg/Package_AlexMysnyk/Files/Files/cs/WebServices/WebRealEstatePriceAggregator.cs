namespace PackageAlexMysnyk.WebServices
{
    using PackageAlexMysnyk.Sevices;

    using System;
    using System.ServiceModel;
    using System.ServiceModel.Activation;
    using System.ServiceModel.Web;

    using Terrasoft.Core.Factories;
    using Terrasoft.Web.Common;

    using global::Common.Logging;

    #region Public: Class

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class WebRealEstatePriceAggregator : BaseService 
    {
        #region Private: Fields

        private RealEstatePriceAggregator _service;
        private readonly ILog _log;

        #endregion

        #region Protected: Properties

        protected RealEstatePriceAggregator Service { 
            get {
                if(_service == null) {
                    _service = ClassFactory.Get<RealEstatePriceAggregator>(
                        new ConstructorArgument("userConnection", UserConnection));
                }

                return _service; 
            } 
        }

        #endregion

        #region Public: Constructor

        public WebRealEstatePriceAggregator() {
            _log = LogManager.GetLogger($"{nameof(WebRealEstatePriceAggregator)}Logger");
        }

        #endregion

        #region Public: Methods

        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped, RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json)]
        public decimal GetRealEstatesSum(string typeId, string offerId) {
            try {
                if(Guid.TryParse(typeId, out var tId) && Guid.TryParse(offerId, out var oId)) {
                    return Service.GetRealEstatesSum(tId, oId);
                }
            } catch(Exception ex) {
                _log.Error("Error calculating real estate total price", ex);
            }

            return -1;
        }

        #endregion
    }

    #endregion
}
