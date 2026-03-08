namespace Package_AlexMysnyk.Sevices
{
    using System;
    using System.Linq;

    using Terrasoft.Core;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Factories;

    #region Public: Class

    [DefaultBinding(typeof(RealEstatePriceAggregator))]
    public class RealEstatePriceAggregator
    {
        #region Private: Fields

        private readonly UserConnection _userConnection;
        private readonly string _targetTableName;

        #endregion

        #region Public: Constructors

        public RealEstatePriceAggregator(UserConnection userConnection) {
            _userConnection = userConnection;
            _targetTableName = "TstRealEstate";
        }

        #endregion

        #region Public: Methods

        public decimal GetRealEstatesSum(Guid typeId, Guid offerId) {
            var entitis = GetRealEstates(typeId, offerId);

            return entitis.Count > 0
                ? entitis.Sum(x => x.GetTypedColumnValue<decimal>("TstCostUSD"))
                : 0;
        }

        #endregion

        #region Private: Methods

        private EntityCollection GetRealEstates(Guid typeId, Guid offerId) {
            var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, _targetTableName);
            esq.AddColumn("TstCostUSD");

            esq.Filters.Add(esq.CreateFilterWithParameters(
                FilterComparisonType.Equal,
                "TstType.Id",
                typeId));
            esq.Filters.Add(esq.CreateFilterWithParameters(
                FilterComparisonType.Equal,
                "TstOfferType.Id",
                offerId));

            return esq.GetEntityCollection(_userConnection);
        }

        #endregion
    }

    #endregion
}
