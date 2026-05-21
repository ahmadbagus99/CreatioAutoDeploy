using System;
using Terrasoft.Core;
using Terrasoft.Web.Common;
using CoreIntegration.CorePenjaminanMultigunaService;

namespace Terrasoft.Configuration.Integration.RabbitMQ
{
    public class IntegrationAppEventListener : AppEventListenerBase
    {
        private OutboundConsumer _outboundConsumer;
        private InboundConsumer  _inboundConsumer;

        public override void OnAppStart(AppEventContext context)
        {
            try
            {
                var appConnection  = context.Application["AppConnection"] as AppConnection;
                var userConnection = appConnection?.SystemUserConnection;

                IntegrationLogger.Initialize(userConnection);
                IntegrationLogger.Info("RabbitMQ Integration starting...");

                // Direct processors — withMessageBroker = false (sync)
                CoreIntegrationWebService.RegisterProcessor(new PenjaminanMultigunaDirectProcessor());

                // Inbound handlers — withMessageBroker = true (async via RabbitMQ)
                InboundConsumer.RegisterHandler(new PenjaminanMultigunaHandler());

                _outboundConsumer = new OutboundConsumer(userConnection);
                _outboundConsumer.Start();

                _inboundConsumer = new InboundConsumer(userConnection);
                _inboundConsumer.Start();

                IntegrationLogger.Info("RabbitMQ Integration started successfully.");
            }
            catch (Exception ex)
            {
                IntegrationLogger.Error("Failed to start RabbitMQ Integration", ex);
            }
        }

        public override void OnAppEnd(AppEventContext context)
        {
            try
            {
                _outboundConsumer?.Dispose();
                _inboundConsumer?.Dispose();
                RabbitMQConnectionManager.Instance.Dispose();
                IntegrationLogger.Info("RabbitMQ Integration stopped.");
            }
            catch (Exception ex)
            {
                IntegrationLogger.Error("Error stopping RabbitMQ Integration", ex);
            }
        }
    }
}
