const { buildClientSchema, printSchema } = require("graphql");
const fs = require("fs");

/**
 * Convert introspection result of CommissionJunction in JSON format from vulcan-affiliate into Graphql SDL
 */


const introspectionSchemaResult = JSON.parse(fs.readFileSync("../vulcan-affiliate/config/cj-commission-schema.json")).data;
const graphqlSchemaObj = buildClientSchema(introspectionSchemaResult);
const sdlString = printSchema(graphqlSchemaObj);
fs.writeFileSync("output.graphql", sdlString)