import { Box, Typography } from '@mui/material';

interface Props {
  type: string;
}

const FileTypePreview: React.FC<Props> = ({ type }) => {
  return (
    <Box className="relative h-10 w-[2.125rem] rounded bg-primary-white shadow-file-card">
      <Typography
        variant="caption"
        // eslint-disable-next-line max-len
        className="absolute -left-[1px] top-1/2 -translate-y-1/2 rounded-sm bg-[#E54040] p-[0.125rem] text-[8px] font-bold leading-[10px] text-primary-white"
      >
        {type.includes('svg') ? 'svg' : type}
      </Typography>
    </Box>
  );
};

export { FileTypePreview };
