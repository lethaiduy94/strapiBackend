

   module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AKIAZ7KOVHIV5ZZBXQB7'),
          secretAccessKey: env('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'),
          region: env('ap-northeast-1'),
          params: {
            Bucket: env('strapi-upload54'),
          },
        },
      },
    },
    // ...
  });