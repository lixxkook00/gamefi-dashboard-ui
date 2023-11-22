import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  useTheme,
  styled,
  Avatar,
  Divider,
  alpha,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar
} from '@mui/material';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Text from 'src/components/Text';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import AccountSecurity from './AccountSecurity';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

const ListItemAvatarWrapper = styled(ListItemAvatar)(
  ({ theme }) => `
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing(1)};
  padding: ${theme.spacing(0.5)};
  border-radius: 60px;
  background: ${
    theme.palette.mode === 'dark'
      ? theme.colors.alpha.trueWhite[30]
      : alpha(theme.colors.alpha.black[100], 0.07)
  };

  img {
    background: ${theme.colors.alpha.trueWhite[100]};
    padding: ${theme.spacing(0.5)};
    display: block;
    border-radius: inherit;
    height: ${theme.spacing(4.5)};
    width: ${theme.spacing(4.5)};
  }
`
);

function AccountBalance() {
  const theme = useTheme();

  const chartSeries = [10, 20, 25, 45];

  return (
    <>
      <Grid spacing={4} container>
        <Grid item xs={12} md={7}>
          <Card>
            <Box p={4}>
              <Typography
                sx={{
                  pb: 3
                }}
                variant="h4"
              >
                Account Balance
              </Typography>
              <Box>
                <Typography variant="h1" gutterBottom>
                  $54,584.23
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="normal"
                  color="text.secondary"
                >
                  1.0045983485234 BTC
                </Typography>
                <Box
                  display="flex"
                  sx={{
                    py: 4
                  }}
                  alignItems="center"
                >
                  <AvatarSuccess
                    sx={{
                      mr: 2
                    }}
                    variant="rounded"
                  >
                    <TrendingUp fontSize="large" />
                  </AvatarSuccess>
                  <Box>
                    <Typography variant="h4">+ $3,594.00</Typography>
                    <Typography variant="subtitle2" noWrap>
                      this month
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Grid container spacing={3}>
                <Grid sm item>
                  <Button fullWidth variant="outlined">
                    Send
                  </Button>
                </Grid>
                <Grid sm item>
                  <Button fullWidth variant="contained">
                    Receive
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <AccountSecurity />
        </Grid>
      </Grid>
    </>
  );
}

export default AccountBalance;
