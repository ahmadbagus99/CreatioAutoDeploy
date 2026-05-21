using System;
using RabbitMQ.Client;

namespace Terrasoft.Configuration.Integration.RabbitMQ
{
    public sealed class RabbitMQConnectionManager : IDisposable
    {
        private static readonly Lazy<RabbitMQConnectionManager> _instance =
            new Lazy<RabbitMQConnectionManager>(() => new RabbitMQConnectionManager());

        public static RabbitMQConnectionManager Instance => _instance.Value;

        private IConnection _connection;
        private readonly object _lock = new object();

        private RabbitMQConnectionManager() { }

        public IModel CreateChannel()
        {
            lock (_lock)
            {
                if (_connection == null || !_connection.IsOpen)
                    _connection = BuildFactory().CreateConnection("CreatioIntegration");

                return _connection.CreateModel();
            }
        }

        private ConnectionFactory BuildFactory() => new ConnectionFactory
        {
            HostName                = RabbitMQConfig.Host,
            Port                   = RabbitMQConfig.Port,
            VirtualHost            = RabbitMQConfig.VirtualHost,
            UserName               = RabbitMQConfig.Username,
            Password               = RabbitMQConfig.Password,
            AutomaticRecoveryEnabled  = true,
            NetworkRecoveryInterval   = TimeSpan.FromSeconds(10)
        };

        public void Dispose()
        {
            _connection?.Close();
            _connection?.Dispose();
        }
    }
}
