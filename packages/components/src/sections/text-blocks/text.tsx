import React from 'react';
import { Box } from '@material-ui/core'
import { textWithTwoParagraphs } from '~/constants/text'

export const DefaultTextSchema = {
  text: {
    value: textWithTwoParagraphs,
    options: {},
  },
};

type SchemaOptions = {
  blockAlignment?: 'text-align-left' | 'text-align-center' | 'text-align-right'
}

type SchemaValue = {
  value: string
  options?: SchemaOptions
}

type TextSchemaType = {
  text: SchemaValue
}

interface IDefaultText {
  schema: TextSchemaType
}

export const DefaultText = ({ schema = DefaultTextSchema }: IDefaultText) => {
  const { text } = schema
  const { value, options } = text

  return (
    <Box contentEditable {...options}>
      {value}
    </Box>
  )
}
