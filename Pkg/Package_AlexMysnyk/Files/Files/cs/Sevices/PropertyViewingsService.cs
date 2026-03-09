namespace PackageAlexMysnyk.Files.cs.Sevices
{
    using Common.Logging;
    using CommonAlexMysnyk.Interfaces;
    using CommonAlexMysnyk.Models;

    using System;

    using Terrasoft.Core;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Factories;
    using Terrasoft.Configuration;
    using CoreSysSettings = Terrasoft.Core.Configuration.SysSettings;

    using global::Newtonsoft.Json;

    #region Public: Class

    [DefaultBinding(typeof(IPropertyViewingsService))]
    public class PropertyViewingsService : IPropertyViewingsService
    {
        #region Private: Fields

        private readonly UserConnection _userConnection;
        private readonly ILog _log;
        private readonly string _targetTableName;
        private readonly int _countForCreatePropertyViewings;

        #endregion

        #region Public: Constructors

        public PropertyViewingsService(UserConnection userConnection) {
            _userConnection = userConnection;
            _log = LogManager.GetLogger($"{nameof(PropertyViewingsService)}Logger");
            _targetTableName = "TstRealEstatePropertyViewings";
            _countForCreatePropertyViewings = CoreSysSettings.GetValue(
                _userConnection,
                "TstCountForCreatePropertyViewings",
                0);
        }

        #endregion

        #region Public: Methods

        public void AddPropertyViewings(PropertyViewingModel model) {
            try {
                for(int i = 1; i <= _countForCreatePropertyViewings; i++) {
                    CreatePropertyViewing(model, i);
                }
            } catch(Exception ex) {
                _log.Error("Error when try creating property viewings: ", ex);
                SandMessageForReloadList(model.RealEstateId, false);
            }

            SandMessageForReloadList(model.RealEstateId);
        }

        #endregion

        #region Private: Methods

        private void CreatePropertyViewing(PropertyViewingModel model, int stepDays) { 
            var schemaManager = _userConnection.EntitySchemaManager.GetInstanceByName(_targetTableName);
            var entity = schemaManager.CreateEntity(_userConnection);
            SetColumns(entity, model, stepDays);

            entity.Save(false);
        }

        private void SetColumns(Entity entity, PropertyViewingModel model, int stepDays) {
            var pontentialClientId = model.PontentialClientId == Guid.Empty 
                ? _userConnection.CurrentUser.ContactId
                : model.PontentialClientId;

            entity.SetDefColumnValues();
            entity.SetColumnValue("TstPotentialClientId", pontentialClientId);
            entity.SetColumnValue("TstResponsibleId", model.ResponsibleId);
            entity.SetColumnValue("TstRealEstateId", model.RealEstateId);
            entity.SetColumnValue("TstDateTimeViewing", DateTime.UtcNow.AddDays(stepDays));
        }

        private void SandMessageForReloadList(Guid realEstateId, bool isSucces = true) {
            var payload = new {
                RealEstateId = realEstateId,
                IsSuccess = isSucces,
                ErrorMessage = isSucces
                    ? ""
                    : GetErrorMessage()
            };

            var body = JsonConvert.SerializeObject(payload);

            MsgChannelUtilities.PostMessage(_userConnection, "ReloadPropertyViewingsListMessage", body);
        }

        private string GetErrorMessage() {
            return _userConnection.GetLocalizableString(
                "TstResourceStorage",
                "CreatePropertyViewingsErrorMessage");
        }

        #endregion
    }

    #endregion
}
