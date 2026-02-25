'use client';

import { Box, Button } from '@mui/material';
import dayjs from 'dayjs';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import DatePicker, {
  type DatePickerProps,
  CalendarContainer,
} from 'react-datepicker';
import type { ReactDatePickerCustomHeaderProps } from 'react-datepicker/dist/calendar';

import useBoolean from '../../../hooks/use-boolean';
import type { ButtonSwitchOption } from '../button-switch';
import { SpriteIcon } from '../sprite-icon';

import { type CustomInputProps, CustomCalendarInput } from './custom-input';
import { CustomCalendarOptions } from './custom-options';
import {
  type RenderCalendarContainerProps,
  CalendarPreset,
  getPresetByRange,
  getRangeByPreset,
  renderCustomDay,
  renderCustomHeader,
} from './utils';

import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css';

export interface RangeDatePickerControlProps {
  date?: {
    startDate: dayjs.Dayjs | null;
    endDate: dayjs.Dayjs | null;
  };
  onChangeDate(
    startDate: dayjs.Dayjs | null,
    endDate: dayjs.Dayjs | null,
  ): void;
}

export interface RangeDatePickerProps
  extends
    Omit<DatePickerProps, 'id' | 'onChange' | 'date'>,
    RangeDatePickerControlProps {
  customInputProps?: Partial<CustomInputProps>;
  disableActionButtons?: boolean;
  disableInput?: boolean;
  disablePresets?: boolean;
  getCalendarPresets?: () => ButtonSwitchOption<CalendarPreset, string>[];
  id: string;
  isLoading?: boolean;
  labels?: {
    cancel?: string;
    apply?: string;
    resetToDefault?: string;
  };
  showResetButton?: boolean;
}

const RangeDatePicker: FunctionComponent<RangeDatePickerProps> = ({
  id,
  disableInput,
  disablePresets,
  disableActionButtons,
  onChangeDate,
  isLoading,
  customInputProps,
  getCalendarPresets,
  date = {
    startDate: null,
    endDate: null,
  },
  labels,
  showResetButton = true,
  ...props
}) => {
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(
    props?.selected ? dayjs(props.selected) : date.startDate,
  );
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(date.endDate);
  const [selectedPreset, setSelectedPreset] = useState<CalendarPreset | null>(
    getPresetByRange(date.startDate, date.endDate),
  );

  useEffect(() => {
    setStartDate(props?.selected ? dayjs(props.selected) : null);
  }, [props?.selected]);

  useEffect(() => {
    setStartDate(date.startDate);
    setEndDate(date.endDate);
    setSelectedPreset(getPresetByRange(date.startDate, date.endDate));
  }, [date]);

  const showDatepicker = useBoolean(false);

  const handleChangeDate = (
    dates: (Date | null | Date[]) | [Date | null, Date | null],
  ) => {
    const [start, end] = Array.isArray(dates) ? dates : [dates, null];
    const startDateValue = start ? dayjs(start) : null;
    const endDateValue = end ? dayjs(end) : null;

    setSelectedPreset(CalendarPreset.Custom);
    setStartDate(startDateValue);
    setEndDate(endDateValue);

    if (!props?.selectsRange) {
      onChangeDate(startDateValue, endDateValue);
    }
  };

  const optionsScrollRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef<number>(0);

  const handleChangePreset = (preset: CalendarPreset) => {
    if (optionsScrollRef.current) {
      scrollPositionRef.current = optionsScrollRef.current.scrollTop;
    }

    setSelectedPreset(preset);

    const { start, end } = getRangeByPreset(preset);

    setStartDate(start);
    setEndDate(end);
  };

  const handleCancel = () => {
    showDatepicker.setFalse();
    handleChangePreset(getPresetByRange(date.startDate, date.endDate));
    onChangeDate(date.startDate, date.endDate);
  };

  const handleSubmitDate = () => {
    showDatepicker.setFalse();
    onChangeDate(startDate, endDate);
  };

  const handleReset = () => {
    const { start, end } = getRangeByPreset(CalendarPreset.ThisMonth);

    showDatepicker.setFalse();
    setSelectedPreset(CalendarPreset.ThisMonth);
    setStartDate(start);
    setEndDate(end);
    onChangeDate(start, end);
  };

  useLayoutEffect(() => {
    if (optionsScrollRef.current && scrollPositionRef.current > 0) {
      optionsScrollRef.current.scrollTop = scrollPositionRef.current;
    }
  });

  const renderContent = ({ children }: RenderCalendarContainerProps) => {
    return (
      <Box className="overflow-hidden rounded-lg bg-primary-white shadow-three">
        <Box className="flex max-h-[327px]">
          {!disablePresets && (
            <Box
              className="overflow-y-scroll shadow-button"
              ref={optionsScrollRef}
            >
              <CustomCalendarOptions
                id="dashboard-calendar-options"
                options={getCalendarPresets?.() ?? []}
                value={selectedPreset ?? ''}
                onRadioClick={handleChangePreset}
              />
            </Box>
          )}
          <Box>
            <CalendarContainer className="flex">{children}</CalendarContainer>
          </Box>
        </Box>
        <Box>
          {!disableActionButtons && (
            <Box className="flex items-center border-0 border-t border-solid border-primary-gray-20 bg-white px-6 py-3">
              {showResetButton && (
                <Box>
                  <Button
                    variant="text"
                    onClick={handleReset}
                    startIcon={
                      <SpriteIcon name="arrows_counterclockwise_outline" />
                    }
                  >
                    {labels?.resetToDefault || 'Reset to default'}
                  </Button>
                </Box>
              )}
              <Box className="ml-auto flex gap-3">
                <Button variant="outlined" onClick={handleCancel}>
                  {labels?.cancel || 'Cancel'}
                </Button>
                <Button
                  variant="filled"
                  onClick={handleSubmitDate}
                  disabled={!startDate || !endDate}
                  className="text-white"
                >
                  {labels?.apply || 'Apply'}
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    );
  };

  return (
    // @ts-expect-error - DatePicker discriminated union types are too complex for proper resolution
    <DatePicker
      portalId={id}
      open={showDatepicker.value}
      selectsRange
      startDate={startDate ? startDate.toDate() : undefined}
      endDate={endDate ? endDate.toDate() : undefined}
      onChange={handleChangeDate}
      onClickOutside={showDatepicker.setFalse}
      customInput={
        <CustomCalendarInput
          selected={props?.selected}
          startDate={date.startDate}
          endDate={date.endDate}
          showDatepickerProps={showDatepicker}
          calendarPreset={getPresetByRange(date.startDate, date.endDate)}
          isLoading={isLoading}
          disableInput={disableInput}
          {...customInputProps}
        />
      }
      calendarContainer={renderContent}
      renderCustomHeader={(
        customHeaderProps: ReactDatePickerCustomHeaderProps,
      ) =>
        renderCustomHeader({
          ...customHeaderProps,
          isOneMonth: Number(props?.monthsShown || 0) <= 1,
        })
      }
      renderDayContents={renderCustomDay}
      formatWeekDay={(day: string) => day.substring(0, 1)}
      popperPlacement="bottom-end"
      showPopperArrow={false}
      closeOnScroll={false}
      {...props}
    />
  );
};

export { RangeDatePicker };
