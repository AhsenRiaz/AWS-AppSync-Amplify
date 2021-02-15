#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkAmplifySubscriptionsStack } from '../lib/cdk_amplify_subscriptions-stack';

const app = new cdk.App();
new CdkAmplifySubscriptionsStack(app, 'CdkAmplifySubscriptionsStack');
