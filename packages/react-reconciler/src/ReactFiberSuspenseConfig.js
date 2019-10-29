/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import ReactSharedInternals from 'shared/ReactSharedInternals';

const {ReactCurrentBatchConfig} = ReactSharedInternals;

export type SuspenseConfig = {|
  timeoutMs: number,
  busyDelayMs?: number,
  busyMinDurationMs?: number,
|};

/**
 * 返回当前Suspense配置
 */
export function requestCurrentSuspenseConfig(): null | SuspenseConfig {
  return ReactCurrentBatchConfig.suspense;
}
