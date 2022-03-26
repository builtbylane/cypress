import { DateTimeResolver, JSONResolver } from 'graphql-scalars'
import { asNexusMethod } from 'nexus'

// Apollo VSCode is having trouble with this directive
JSONResolver.specifiedByURL = null

export const customScalars = [
  asNexusMethod(JSONResolver, 'json'),
  asNexusMethod(DateTimeResolver, 'dateTime'),
]
