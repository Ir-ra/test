import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingSIze() {
  return (
    <Stack spacing={0}>
      <Rating name="size-small" defaultValue={0} size="small" />
      <Rating name="size-medium" defaultValue={0} />
      <Rating name="size-large" defaultValue={2} size="large"  />
    </Stack>
  );
}