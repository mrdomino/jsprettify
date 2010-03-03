#!/usr/bin/env python

# Copyright 2010 Steven Dee. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from os import chdir, sep
from subprocess import call, PIPE

# Closure library directory relative to project root.
closuredir = sep.join(['..', 'closure-library', 'closure'])
# Project directory relative to the location of base.js (see below.)
projdir = sep.join(['..', '..', '..', 'jsprettify'])

# Per erik.arvidsson@gmail.com:
# > It is a bit tricky to get the paths correct but I found that running
# > the script from the same directory as base.js works for me.
# > Something like:
# >
# > ../bin/calcdeps.py -o deps -p ../../../test/ > ../../../test/deps.js
chdir(sep.join([closuredir, 'goog']))
calcdeps = sep.join(['..', 'bin', 'calcdeps.py'])
depsjs = open(sep.join([projdir, 'deps.js']), 'w')
call([calcdeps, '-o', 'deps', '-p', projdir], stdout=depsjs, stderr=PIPE)
