var N3Serializer = require('rdf-serializer-n3');
rdf.serializers['text/turtle'] = N3Serializer;
if (typeof window !== 'undefined') {
    window.N3Serializer = N3Serializer;
}