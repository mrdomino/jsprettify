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

from os import mkdir, path, sep
from subprocess import call

compiler_jar = sep.join(['..', 'closure-compiler', 'compiler.jar'])
closure_dir = sep.join(['..', 'closure-library', 'closure'])
calcdeps = sep.join([closure_dir, 'bin', 'calcdeps.py'])
targets = [{'src': 'prettify.js',
            'out': sep.join(['build', 'prettify-comp.js'])},
           {'src': sep.join(['gadgets', 'example.js']),
            'out': sep.join(['build', 'example-comp.js'])},
           {'src': 'bookmarklet.js',
            'out': sep.join(['build', 'bookmarklet-comp.js']),
            'ext': 'bookmarklet-externs.js'}]

if not path.isdir('build'):
    mkdir('build')

for t in targets:
    flags = [calcdeps, '-o', 'compiled', '--compiler_jar=' + compiler_jar,
             '-p', closure_dir, '-p', '.', '--output_file=' + t['out'], '-i',
             t['src'],
             '-f', '--compilation_level', '-f', 'ADVANCED_OPTIMIZATIONS',
             '-f','--warning_level', '-f', 'VERBOSE'
            ]
    if 'ext' in t:
        flags.extend(['-f', '--externs', '-f', t['ext']])
    call(flags)
