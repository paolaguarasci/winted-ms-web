# Self Signed Root CA

```shell
$ openssl req -x509 -sha256 -days 3650 -newkey rsa:4096 -keyout rootCA.key -
out rootCA.crt
```

# Keystore

## Server-side Certificate

Crea un file `localhost.ext` con questo contenuto:

```conf
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
subjectAltName = @alt_names
[alt_names]
DNS.1 = localhost
```

poi esegui questi comandi

```shell
# creating a certificate signing request (CSR)
$ openssl req -new -newkey rsa:4096 -keyout localhost.key -out localhost.csr
#  sign the request with our rootCA.crt certificate and its private key
$ openssl x509 -req -CA rootCA.crt -CAkey rootCA.key -in localhost.csr -out localhost.crt -days 365 -CAcreateserial -extfile localhost.ext
```

Ora il file `localhost.crt` e' un certificato firmato dalla rootCA.

## Import to the Keystore

```shell
# create a .p12 file
$ openssl pkcs12 -export -out localhost.p12 -name "localhost" -inkey localhost.key -in localhost.crt
# create a keystore.jks repository and import the localhost.p12
$ keytool -importkeystore -srckeystore localhost.p12 -srcstoretype PKCS12 -destkeystore keystore.jks -deststoretype JKS
```

aggiungere le seguenti properties:

```yaml
server:
  ssl:
    key-store: store/keystore.jks
    key-store-password: PASSWORD
    key-alias: localhost
    key-password: PASSWORD
    enabled: true
```

# Mutual Authentication

## Truststore

```shell
# create a truststore.jks file and import the rootCA.crt
$ keytool -import -trustcacerts -noprompt -alias ca -ext san=dns:localhost,ip:127.0.0.1 -file rootCA.crt -keystore truststore.jks
$ keytool -import -trustcacerts -noprompt -alias localhost -ext san=dns:localhost,ip:127.0.0.1 -file localhost.crt -keystore truststore.jks
```

<!-- Aggiungere le seguenti proprieta'

```yaml
server:
  ssl:
    trust-store: store/truststore.jks
    trust-store-password: PASSWORD
    # client-auth: need
``` -->

## Parametri di avvio

Ogni servizio deve essere avviato con questo parametro, non se lo prende il keystore

```shell
-Djavax.net.ssl.trustStore=store/truststore.jks -Djavax.net.ssl.trustStorePassword=PASSWORD
```

## S3 cert

Il servizio risorse ha bisogno del certificato di s3 altrimenti non funziona
Scaricarlo dal browser (con chrome e' facile esportarlo)
poi caricarlo nel truststore

```shell
$ keytool -import -trustcacerts -noprompt -alias s3 -file s3.cert -keystore truststore.jks
```

# Note

in ogni caso, per via dei CORS, angular ha bisogno del proxy. Creare un file nella root `proxy.conf.json`

```json
{
  "/api/v1/*": {
    "target": "https://localhost:8443",
    "secure": false,
    "changeOrigin": true
  }
}
```

e aggiungere la riga `"proxyConfig": "proxy.conf.json"` in `angular.json`

```json
{
  "projects": {
    "web": {
      "architect": {
        "serve": {
          "options": {
            "proxyConfig": "proxy.conf.json"
          }
        }
      }
    }
  }
}
```


openssl x509 -outform der -in your-cert.pem -out your-cert.crt 

-extfile localhost.ext

localhost.ext
```conf
[req]
default_bits = 2048
prompt = no
default_md = sha256
req_extensions = req_ext
distinguished_name = some_dn

[some_dn]
C = US
ST = Florida
L = Jacksonville
O = SomeOrg
emailAddress = some@email.com
CN = thedomain.com

[req_ext]
subjectAltName = @alt_names

[alt_names]
DNS.1 = otherdomain.com
IP.1 = 1.2.3.4
```


-ext san=dns:localhost,ip:127.0.0.1